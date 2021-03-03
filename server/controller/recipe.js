import recipe from '../models/recipe.js';
import user from '../models/user.js';

export const getRecipes = async (req, res) => {
    try {
        const recipies = await recipe.find();
        res.status(200).json(recipies);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getUserRecipes = async (req, res) => {
    const userID = req.body.token;
    
    recipe.find({
        creatorID: userID
    }, (err, previousRecipes) =>{
        if(err){
            return res.send({
                success: false,
                message: 'Error: cannot find any recipes for this user'
            });
        } else if (previousRecipes.length > 0){
            return res.send({
                success: true,
                message: 'success: recipes found',
                recipes: previousRecipes
            });

        } else if (previousRecipes.length < 1){
            return res.send({
                success: false,
                message: 'Error: no recipes for this user found'
            });
            
        }
    });
}

export const getSearchRecipes = async (req, res) => {
    const param = req.body.param;
    
    recipe.find({
        name: {$regex: param,$options: "i"}
    }, (err, previousRecipes) =>{
        if(err){
            return res.send({
                success: false,
                message: `Error: cannot find any recipes containing ${param}`
            });
        } else if (previousRecipes.length > 0){
            return res.send({
                success: true,
                message: 'success: recipes found',
                recipes: previousRecipes
            });

        } else if (previousRecipes.length < 1){
            return res.send({
                success: false,
                message: `Error: cannot find any recipes containing ${param}`
            });
            
        }
    });
}


export const removeFavRecipe = async (req, res) => {
    const param = req.body;
    const userid = param.userid;
    const recipeid = param.recipeid;
    
    user.updateOne({
        _id: userid
    }, {$pull:{"savedRecipes":recipeid}},(err, previousUsers) =>{
        if(err){
            return res.send({
                success: false,
                message: `Error: cannot find user`
            });
        }
        //console.log(previousUsers);
        return res.send({
            success: true,
            message: 'recipe successfully removed from favourites'
        }); 
    });
}


export const getFavouriteRecipes = async (req, res) => {
    const param = req.body.token;
    
    user.find({
        _id: param
    }, (err, previousUsers) =>{
        if(err){
            return res.send({
                success: false,
                message: `Error: cannot find specified user`
            });
        } 
        else if(previousUsers.length ===   1){
            const recipes = previousUsers[0].savedRecipes;
            
            if(recipes.length === 0){
                return res.send({
                    success: false,
                    message: `No recipes to display`
                });
            }
            recipe.find({
                _id: {$in: recipes}
            }, (error, currRecipes) => {
                if(error){
                    return res.send({
                        success: false,
                        message: `Error: server error`
                    });
                }
                return res.send({
                    success: true,
                    message: 'successfully found recipes',
                    recipes: currRecipes
                });
                
            });
        }
    });
}


export const addFavouriteRecipes = async (req, res) => {
    const param = req.body;
    const userid = param.userid;
    const recipeid = param.recipeid;
    
   recipe.find({
        _id: recipeid
    }, (err, previousRecipes) =>{
        if(err){
            return res.send({
                success: false,
                message: `Error: cannot find specified recipe`
            });
        } 
        else if (previousRecipes.length === 1){
            user.find(
                {savedRecipes: recipeid},
                (errors,previousIDs) =>{
                    if(errors){
                        return res.send({
                            success: false,
                            message: `Error: server error`
                        });
                    }
                    if(previousIDs.length === 0){
                        user.findOneAndUpdate({
                            _id: userid,
                        }, {
                            $push:{
                                savedRecipes: previousRecipes[0]._id
                            }
                        }, null, (error, sessions) => {
                            if(error){
                                console.log(error);
                                return res.send({
                                    success: false,
                                    message: 'Error: Server Error'
                                });
                            }
                            return res.send({
                                success: true,
                                message: 'Recipe added to favourites'
                            });
                        });
                    }
                    else if(previousIDs.length === 1){
                        return res.send({
                            success: true,
                            message: `Error: recipe already added to your favourites`
                        });
                    }
                    else{
                        return res.send({
                            success: false,
                            message: `Error: server error`
                        });
                    }
                }
            );

        } else{
            return res.send({
                success: false,
                message: `Error: cannot find any recipes containing ${param}`
            });
            
        }
    });
}



export const createRecipe = async (req, res) =>{
    //console.log(req.body);
    const data = req.body;
    if(!data.name){
        return res.send({
            success: false,
            message: 'Error: Name cannot be blank.'
          });
    }
    if(!data.calories){
        return res.send({
            success: false,
            message: 'Error: Calories cannot be blank.'
          });
    }
    if(!data.image){
        return res.send({
            success: false,
            message: 'Error: Must include an image'
          });
    }
    if(!data.ingredients){
        return res.send({
            success: false,
            message: 'Error: Must contain at least one ingredient.'
          });
    }
    if(!data.creator){
        return res.send({
            success: false,
            message: 'Error: Must have a creator.'
          });
    }
    const newRecipe = new recipe(data);
    try {
        await newRecipe.save();
        user.updateOne({
            _id: newRecipe.creatorID
        }, {
            $push:{
                createdRecipes: newRecipe._id
            }
        }, null, (err, sessions) => {
            if(err){
                console.log(err);
                return res.send({
                    success: false,
                    message: 'Error: Server Error'
                });
            }
            return res.send({
                success: true,
                message: 'Success: recipe created and successfully associated with user'
            });
        });
        /*res.status(201).json({
            success: true,
            message: 'Success: Recipe successfully created'
        });*/
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


export const deleteRecipe = async (req,res) =>{
    const recipeid = req.body.recipeid;
    const userid = req.body.userid;

    user.updateOne({
        _id: userid
    }, {$pull:{"savedRecipes":recipeid, "createdRecipes":recipeid}},(err, previousUsers) =>{
        if(err){
            return res.send({
                success: false,
                message: `Error: cannot find user`
            });
        }
        //console.log(previousUsers);
        recipe.findOneAndDelete({
            _id:recipeid
        },(errors,recipes) =>{
            if(errors){
                return res.send({
                    success: false,
                    message: `Error: cannot find recipe`
                });
            }
            if(recipes){
                return res.send({
                    success: true,
                    message: 'recipe successfully removed from favourites'
                });
            }
            else if(!recipes){
                return res.send({
                    success: false,
                    message: `Error: Problem occured when attempting to delete recipe`
                }); 
            }
        });
    });


}
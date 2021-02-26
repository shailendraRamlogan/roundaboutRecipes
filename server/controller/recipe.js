import recipe from '../models/recipe.js';

export const getRecipes = async (req, res) => {
    try {
        const recipies = await recipe.find();
        res.status(200).json(recipies);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createRecipe = async (req, res) =>{
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
        res.status(201).json({
            success: true,
            message: 'Success: Recipe successfully created'
        });
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}
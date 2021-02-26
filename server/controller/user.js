import user from '../models/user.js';
import userSession from '../models/userSession.js';

export const createUser = async (req, res) =>{
    const data = req.body;
    if(!data.firstName){
        return res.send({
            success: false,
            message: 'Error: First Name cannot be blank.'
          });
    }
    if(!data.lastName){
        return res.send({
            success: false,
            message: 'Error: Last Name cannot be blank.'
          });
    }
    if(!data.email){
        return res.send({
            success: false,
            message: 'Error: Email cannot be blank.'
          });
    }
    if(!data.password){
        return res.send({
            success: false,
            message: 'Error: Password cannot be blank.'
          });
    }

    
    user.find({
        email: data.email
    }, (err, previousUsers) =>{
        if(err){
            return res.send({
                success: false,
                message: 'Error: server error'
            });
        } else if (previousUsers.length > 0){
            return res.send({
                success: false,
                message: 'Error: email already associated with another account'
            });
        }
        const newUser = new user(data);
        newUser.password = newUser.generateHash(newUser.password);
        newUser.save((err, user) =>{
            if(err){
                return res.send({
                    success: false,
                    message: 'Error: unable to create user please try again'
                }); 
            }
            return res.send({
                success: true,
                message: 'user created'
            });
        });
    });
    
}

export const findUser = async (req, res) =>{
    const currid = req.body.token;
    //console.log(req.body.token);
    user.find({
        _id: currid
    }, (err, previousUsers) =>{
        if(err){
            return res.send({
                success: false,
                message: 'Error: cannot find user'
            });
        } else if (previousUsers.length > 0){
            return res.send({
                success: true,
                message: 'success: user found',
                name: previousUsers[0].firstName + " " + previousUsers[0].lastName
            });
        }
    });
    /*console.log(req.body);
    const id = req.body.token;
    user.find({
        _id: id
    }, (err, previousUsers) =>{
        if(err){
            return res.send({
                success: false,
                message: 'Error: cannot find user'
            });
        } else if (previousUsers.length === 1){
            return res.send({
                success: true,
                message: 'Success, found user',
                name: previousUsers[0].firstName + " " + previousUsers[0].lastName
            });
        }
    })*/
}

export const loginUser = async (req, res) =>{
    const credentials = req.body;
    const email = credentials.email;
    const password = credentials.password;

    if(!email){
        return res.send({
            success: false,
            message: 'Error: Email cannot be empty'
        });
    }
    if(!password){
        return res.send({
            success: false,
            message: 'Error: Password cannot be empty'
        });
    }
    
    user.find({
        email: email
    }, (err, users) =>{
        if(err){
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        if(users.length != 1){
            return res.send({
                success: false,
                message: `Error: no user currently associated with ${email}`
            });
        }
        const currUser = users[0];
        if(!currUser.validPassword(password)){
            return res.send({
                success: false,
                message: 'Error: invalid password'
            });
        }

        const newUserSession = new userSession();
        newUserSession.userID = currUser._id;
        newUserSession.save((err, doc) => {
            if(err){
                console.log(err);
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            return res.send({
                success: true,
                message: 'Success: valid sign in',
                token: doc.userID
            });
        });
    });    
    
}

export const logoutUser = async (req,res) =>{
    const token = req.body;
    userSession.findOneAndUpdate({
        _id: token.token,
        isDeleted: false
    }, {
        $set:{
            isDeleted: true
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
            message: 'Success: session ended'
        });
    });
}


export const verifyUserSession = async (req,res) =>{
    const token = req.body;
    userSession.find({
        _id: token.token,
        isDeleted: false
    }, (err, sessions) => {
        if(err){
            console.log(err);
            return res.send({
                success: false,
                message: 'Error: Server Error'
            });
        }
        if(sessions.length != 1){
            return res.send({
                success: false,
                message: 'Error: your session has expired please login again'
            });
        }
        else{
            return res.send({
                success: true,
                message: 'User currently authenticated'
            });
        }
        
    });
}
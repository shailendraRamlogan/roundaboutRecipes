import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    savedRecipes:{
        type: [String]
    },
    createdRecipes:{
        type: [String]
    }
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

const user = mongoose.model('user', userSchema);

export default user;
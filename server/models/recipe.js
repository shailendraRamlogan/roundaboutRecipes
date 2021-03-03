import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    calories:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: false
    },
    ingredients:{
        type: [String],
        required: true
    },
    creator:{
        type: String,
        required: true
    },
    creatorID:{
        type: String,
        required: true
    }
});

const recipe = mongoose.model('recipe', recipeSchema);
export default recipe;
import mongoose from 'mongoose';

const userSessionSchema = mongoose.Schema({
    userID: {
        type: String,
        default: ''
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
});

const userSession = mongoose.model('userSession', userSessionSchema);

export default userSession;
import { Schema, model, models } from 'mongoose';

const User = models.User || model('User', new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    arrival: String,
    departure: String,
}));

export default User;

import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, required: true },        
    },
    {
        timestamps: true // Automatically creates createdAt and updatedAt fields
    })
const user = mongoose.model('User', userSchema);
export default user;
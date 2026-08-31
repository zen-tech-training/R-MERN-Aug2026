import { mongoose } from 'mongoose';
import '../config/config.js'

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/order-processing', {
        })
        console.log("MongoDB is connected successfully");
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }    
}
export default connectDB;
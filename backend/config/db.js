import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Mayanksharma:1234@cluster0.cartf.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}
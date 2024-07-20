import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shivamgupta26206:9838531617@cluster0.wri4fyf.mongodb.net/todo-nextjs-app?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("DB connected");
};

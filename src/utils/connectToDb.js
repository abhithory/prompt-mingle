import mongoose from 'mongoose';

export let isConnectedToDb = false;
export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
          dbName: "prompt_mingle",
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        isConnectedToDb = true;
        console.log('MongoDB connected')
      } catch (error) {
        console.log(error);
      }
}
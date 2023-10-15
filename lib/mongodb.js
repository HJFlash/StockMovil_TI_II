import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Conectado a MongoDB");
    await client.connect();
  
    const database = client.db('StockMovil');
  
    return database;
  } catch (error) {
    console.log("Error al conectar a MongoDB: ", error);
  }
};

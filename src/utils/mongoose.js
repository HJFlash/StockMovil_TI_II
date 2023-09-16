import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Amaro:123@cluster0.haejzuj.mongodb.net/StockMovil', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a MongoDB exitosa');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
};

export {connectDB};
// import {connect, connection} from 'mongoose'

// const conn = {
//     isConnected: false
// }

// export async function connectDB(){
//     if(conn.isConnected) return;

//     const db = await connect('mongodb+srv://Amaro:123@cluster0.haejzuj.mongodb.net/StockMovil')
//     //console.log(db.connection.db.databaseName)
//     conn.isConnected = db.connections[0].readyState
// }

// connection.on('connected',() => {
//     console.log('Mongoose is connection')
// })

// connection.on('error', () => {
//     console.log('Mongoose connection error')
// })
import {connect, connection} from 'mongoose'

const conn = {
  isConnected: false
}

export async function dbConnect(){
  if (conn.isConnected) {
    return
  }
  const db = await connect(process.env.MONGODB_URI);

  conn.isConnected = db.connections[0].readyState

  console.log(db.connection.db.databaseName)
}

export default function handler(req, res) {
  res.status(200).json({ message: 'wena gente' })
}

connection.on("connected", () => {
  console.log("MongoDB is Connected")
})

connection.on("error", (err) => {
  console.log(err)
})
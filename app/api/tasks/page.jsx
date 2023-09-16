import {dbConnect} from '../../utils/mongoose'

dbConnect()

export default async function handler(req, res) {
  res.status(200).json("tasks")
}
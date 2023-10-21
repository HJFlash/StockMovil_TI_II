import { NextResponse } from "next/server";
import { dbConnect } from "@/app/utils/mongoose";
import Ausuario from "@/app/models/Usuario"

export async function GET(request, {params}){
  dbConnect()

  const usuarios = await Ausuario.find()
  return NextResponse.json({usuarios})
}

export async function POST(request) {
  try {
      const data = await request.json();
      const newUser = new Ausuario(data);
      const savedUser = await newUser.save();
      return NextResponse.json(savedUser);

  } catch (error) {
    return NextResponse.json(NextResponse.json(error.message, {
      status: 400
    }));
  }
}
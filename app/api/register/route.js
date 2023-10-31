/*
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
*/
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Usuario from "@/models/user";

export async function POST(request) {
  try {
    await connectMongoDB();
    const data = await request.json();
    if(data.administrador == "on"){
      data.administrador = true;
    }else{
      data.administrador = false;
    }
    const newUser = new Usuario(data);
    const savedUser = await newUser.save();
    return NextResponse.json(savedUser);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

/*
export async function POST(req) {
  try {
    const { usuario, nombre, apellido, n_documento, email, password, fec_Nacimiento, administrador } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ usuario, nombre, apellido, n_documento, email, password: hashedPassword, fec_Nacimiento, administrador });

    return NextResponse.json({ message: "usuario Registrado." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "a ocurrido un error mientras se registraba." },
      { status: 500 }
    );
  }
}
*/
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Usuario from "@/models/user";
import bcrypt from "bcryptjs";

export async function GET(request, {params}){
  connectMongoDB()

  const usuarios = await User.find()
  return NextResponse.json({usuarios})
}

export async function POST(request) {
  try {
    const { usuario, nombre, apellido, n_documento, email, password, fec_Nacimiento, administrador } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    
    let isAdmin = false;
    if(administrador == "on"){
      isAdmin = true;
    }
    
    // Crea un objeto con todos los datos del usuario
    const userData = {
      usuario,
      nombre,
      apellido,
      n_documento,
      email,
      password: hashedPassword, // Guarda la contraseña encriptada
      fec_Nacimiento,
      administrador: isAdmin
    };

    const newUser = new Usuario(userData);
    const savedUser = await newUser.save();
    
    // Retorna el objeto con todos los datos del usuario guardado en la base de datos
    return NextResponse.json({message:"Usuario Registrado."}, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

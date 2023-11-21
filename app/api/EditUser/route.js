import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
//import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    await connectMongoDB();
    const { email, password } = await req.json();
    console.log("email: ", email);
    console.log("password: ", password);
    // Encuentra el usuario por email y actualiza la contraseña
    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      { password: password },
      { new: true } // Devuelve el documento actualizado
    );
    console.log("updatedUser: ", updatedUser);
    if (updatedUser) {
      console.log("Usuario actualizado correctamente");
      // return NextResponse.json({ message: 'Usuario actualizado correctamente' });
    } else {
        console.log("Usuario no encontrado");
        // return NextResponse.error('Usuario no encontrado', { status: 404 });
    }
  } catch (error) {
    console.log("error:server" );
    console.error(error);
    // return NextResponse.error('Error interno del servidor', { status: 500 });
  }
}



import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

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

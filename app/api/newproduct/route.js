import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Producto from "@/models/Producto";

export async function POST(request) {
  try {
    await connectMongoDB();
    const data = await request.json();
    const newProd = new Producto(data);
    const savedProd = await newProd.save();
    return NextResponse.json(savedProd);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
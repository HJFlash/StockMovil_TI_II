import { NextResponse } from "next/server";
import { dbConnect } from "@/app/utils/mongoose";
import EsqProducto from "@/app/models/Producto"

export async function GET(request, {params}){
  dbConnect()

  const productos = await EsqProducto.find()
  return NextResponse.json({productos})
}

export async function POST(request) {
  try {
      const data = await request.json();
      const newProduct = new EsqProducto(data);
      const savedProduct = await newProduct.save();
      return NextResponse.json(savedProduct);

  } catch (error) {
    return NextResponse.json(NextResponse.json(error.message, {
      status: 400
    }));
  }
}


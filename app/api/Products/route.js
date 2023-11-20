import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Producto from "@/models/Producto";

export async function GET(request, {params}){
  await connectMongoDB()

  const productos = await Producto.find()
  return NextResponse.json({productos})
}

export async function POST(request) {
  try {
    await connectMongoDB();
    const data = await request.json();
    if(data.Precio != 0){
      const Calculo = ((data.Precio*data.Oferta)/100);
      data.PrecioF = (data.Precio-Calculo);
    }else{
      data.PrecioF = 0;
    }
    const newProd = new Producto(data);
    const savedProd = await newProd.save();
    return NextResponse.json(savedProd);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}


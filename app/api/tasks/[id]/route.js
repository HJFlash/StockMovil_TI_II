import { NextResponse } from "next/server";
import { dbConnect } from "@/app/utils/mongoose";
import EsqProducto from "@/app/models/Producto"

export async function GET(request, {params}){
    dbConnect()

    const productos = await EsqProducto.find()
    return NextResponse.json({productos})
}

export async function PUT(request, {params}) {
    try {
      const data = await request.json()
      console.log(data)
      const ProductoActualizado = await EsqProducto.findByIdAndUpdate(params.id, data, {
        new: true
      })
      return NextResponse.json(ProductoActualizado)
      
    } catch (error) {
      return NextResponse.json(error.message, {
        status: 400
      })
    }
  }

  export async function DELETE(request, {params}) {
    try {
        const ProductoEliminado = await EsqProducto.findByIdAndDelete(params.id)
        if(!ProductoEliminado) {
            return NextResponse.json({
                message: "Producto no encontrado",
            },{
                status: 400
            })
        }
        return NextResponse.json(ProductoEliminado)

    } catch (error) {
        return NextResponse.json(error.message, {
        status: 400
    })
    }
  }
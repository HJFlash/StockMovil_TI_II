import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user"

export async function GET(request, {params}){
    connectMongoDB()

    const usuario = await User.findOne(params.id)
    return NextResponse.json({usuario})
}

export async function PUT(request, {params}) {
    try {
      const data = await request.json()
      console.log(data)
      const UsuarioActualizado = await Usuario.findByIdAndUpdate(params.id, data, {
        new: true
      })
      return NextResponse.json(UsuarioActualizado)
      
    } catch (error) {
      return NextResponse.json(error.message, {
        status: 400
      })
    }
  }

export async function DELETE(request, {params}) {
  try {
      const UsuarioEliminado = await User.findByIdAndDelete(params.id)
      if(!UsuarioEliminado) {
          return NextResponse.json({
              message: "Usuario no encontrado",
          },{
              status: 400
          })
      }
      return NextResponse.json(UsuarioEliminado)

  } catch (error) {
      return NextResponse.json(error.message, {
      status: 400
  })
  }
}
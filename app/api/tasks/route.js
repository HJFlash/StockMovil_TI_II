import { NextResponse } from "next/server";
import { dbConnect } from "@/app/utils/mongoose";
import EsqProducto from "@/app/models/Task"

export async function GET(request, {params}){
    dbConnect()

    const productos = await EsqProducto.find()
    return NextResponse.json({productos})
}

export function POST(){
    return NextResponse.json({
        message: 'Creando tareas ...'
})
}
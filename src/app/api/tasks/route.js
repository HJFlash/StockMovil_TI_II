import { NextResponse } from "next/server";
export function GET(request, {params}){
    return NextResponse.json({
        messege: "obteniendo id..",
    });
}
export function DELETE(request,{params}){
    return NextResponse.json({
        messege: 'eliminando ${params.id}...',
    });
}

export function PUT(request,{params}){
    return NextResponse.json({
        messege: "actualizando ${params.id}...",
    });
}
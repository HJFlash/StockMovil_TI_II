import {NextResponse} from 'next/server';
export function GET(){
    return NextResponse.json({
        messege: "nose nose",
    });
}
export function POST(){
    return NextResponse.json({
        messege: "creando",
    });
}
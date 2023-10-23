import {Schema,model,models} from 'mongoose'

const EsquemaProducto = new Schema({
    CodigoBarras: {
        type: Number,
        required: [true, 'ID requerido'],
        unique: true
    },
    Nombre: {
        type: String,
        required: [true, 'Nombre requerido'],
        unique: true,
        trim: true
    },
    Cantidad: {
        type: Number,
        required: [true, 'Cantidad de productos requerida'],
        unique: true,
        trim: true
    },
    Precio: {
        type: Number,
        required: [true, 'Precio requerido'],
        unique: true,
        trim: true
    },
    Oferta: {
        type: Number,
        default: 0,
        trim: true,
    }
}, {
    timestamps: true,
})

export default models.Producto || model('Producto', EsquemaProducto);
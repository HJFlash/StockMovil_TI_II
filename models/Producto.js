import {Schema,model,models} from 'mongoose'

const EsquemaProducto = new Schema({
    CodigoBarras: {
        type: Number,
        required: [true, 'Codigo de barras requerido'],
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
        default: 0,
        unique: false,
        trim: true
    },
    Precio: {
        type: Number,
        required: [true, 'Precio requerido'],
        trim: true
    },
    Oferta: {
        type: Number,
        default: 0,
        trim: true,
    },
    PrecioF: {
        type: Number,
        default: 0,
        trim: true,
    },
    Tipo_producto: {
        type: String,
    }
}, {
    timestamps: true,
})

export default models.Producto || model('Producto', EsquemaProducto);
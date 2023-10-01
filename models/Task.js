import {Schema,model,models} from 'mongoose'

const EsquemaProducto = new Schema({
    ID: {
        type: String,
        required: [true, 'ID requerida'],
        unique: true,
        trim: true
    },
    Nombre: {
        type: String,
        required: [true, 'Nombre requerido'],
        unique: true,
        trim: true
    },
    Precio: {
        type: Number,
        required: [true, 'Precio requerido'],
        unique: true,
        trim: true
    }
}, {
    timestamps: true,
})

export default models.EsquemaProducto || model('Producto', EsquemaProducto);
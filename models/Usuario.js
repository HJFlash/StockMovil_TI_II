import {Schema,model,models} from 'mongoose'

const EsqUsuario = new Schema({
    Usuario: {
        type: String,
        required: [true, "Nombre de Usuario requerido"],
        unique: true,
        trim: true
    },
    Nombre: {
        type: String,
        required: [true, "Nombre requerido"],
        unique: true,
        trim: true
    },
    Apellido: {
        type: String,
        required: [true, "Apellido requerido"],
        unique: true,
        trim: true
    },
    Nro_Documento: {
        type: Number,
        required: [true, "RUT requerido"],
        unique: true,
        trim: true
    },
    Email: {
        type: String,
        required: [true, "Correo Electronico requerido"],
        unique: true,
        trim: true
    },
    Password: {
        type: String,
        required: [true, "Correo Electronico requerido"],
        unique: true,
        trim: true
    },
    Fec_Nacimiento: {
        type: String,//CAMBIAR
        required: [true, "Fecha de nacimiento requerido"],
        unique: true,
        trim: true
    },
    Admin: {
        type: Boolean,
        required: false,
        unique: true,
        trim: true
    },
}, {
    timestamps: true,
})

export default models.Usuario || model("Usuario", EsqUsuario)
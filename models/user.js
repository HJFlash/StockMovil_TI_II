//import mongoose, { Schema, models } from "mongoose";
import {Schema,models,model} from "mongoose";

const userSchema = new Schema(
  {
    usuario: {
      type: String,
      unique: true,
      required: [true, 'Usuario requerido']
    },
    nombre: {
      type: String,
      required: [true, 'Nombre requerido']
    },
    apellido: {
      type: String,
      required: [true, 'Apellido requerido']
    },
    n_documento: {
      type: String,
      unique: true,
      required: [true, 'Rut requerido']
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email requerido']
    },
    password: {
      type: String,
      required: [true, 'Contraseña requerida']
    },
    fec_Nacimiento: {
      type: String,
      required: [true, 'Fecha de nacimiento requerida']
    },
    administrador: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

/*
userSchema.pre('save', function(next) {
  //Antes de guardar el usuario, convertimos el campo de fecha a un formato especÃ­fico usando moment.js
  if (this.fec_Nacimiento) {
    this.fec_Nacimiento = moment(this.fec_Nacimiento, 'DD-MM-YYYY').toDate();
  }
  next();
});
*/
export default models.Usuario || model("Usuario", userSchema);
/*
const userSchema = new Schema(
  {
    usuario: {
      type: String,
      unique: true,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    n_documento: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fec_Nacimiento: {
      type: String,
      required: true,
    },
    administrador: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', function(next) {
  // Antes de guardar el usuario, convertimos el campo de fecha a un formato específico usando moment.js
  if (this.fec_Nacimiento) {
    this.fec_Nacimiento = moment(this.fec_Nacimiento, 'DD-MM-YYYY').toDate();
  }
  next();
});

const User = models.User || mongoose.model("User", userSchema, "users");
export default User;
*/

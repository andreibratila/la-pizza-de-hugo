import * as yup from "yup";

export const sendMessage = yup.object().shape({
  name: yup
    .string()
    .required("Este campo es obligatorio")
    .max(45, "El nombre no puede tener más de 45 caracteres"),

  subject: yup
    .string()
    .required("Este campo es obligatorio")
    .max(50, "El asunto no puede tener más de 50 caracteres"),

  message: yup
    .string()
    .required("Este campo es obligatorio")
    .max(500, "El mensaje no puede tener más de 500 caracteres"),

  email: yup
    .string()
    .required("Este campo es obligatorio")
    .email()
    .max(55, "El email no puede tener más de 55 caracteres"),

  phone: yup
    .number()
    .typeError("Este campo solo acepta números")
    .required("Este campo es obligatorio")
    .positive("El número de teléfono debe ser positivo")
    .integer("El número de teléfono debe ser un número entero")
    .min(100000000, "El teléfono debe tener al menos 9 dígitos")
    .max(999999999999999, "El teléfono no puede tener más de 15 dígitos"),

  termsConfirmed: yup
    .boolean()
    .oneOf([true], "Tienes que aceptar los términos y condiciones"),
});

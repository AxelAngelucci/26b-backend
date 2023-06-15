const {check, validationResult} = require("express-validator");
const useValidationResult = require("../utils/useValidationResult");

const registerMiddleware = [
    check('mail').trim().not().isEmpty().withMessage("Por favor ingrese un EMAIL").isEmail().withMessage("Eso no es un email válido"),
    check('name').trim().not().isEmpty().withMessage("El nombre es obligatorio"),
    check('password').not().isEmpty().isLength(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/).withMessage("La contraseña debe tener mayúsculas, minúsculas, simbolos y un minimo de 8 caracteres"),
    (request, response, next) => {
        useValidationResult(request, response, next)
    }
]

module.exports = registerMiddleware;

import joi from 'joi'

const DonarSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    phone: joi.string().required(),
    address: joi.string().required(),
    age : joi.number().required(),
    weight : joi.number().required(),
    motherName : joi.string().required(),
    fatherName : joi.string().required(),
    bloodType : joi.string().required(),
})
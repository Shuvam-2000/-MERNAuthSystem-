const Joi = require('joi');

// user signup validation
const signupValidation = (req,res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(40).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(40).required()
    });
    const { error } = schema.validate(req.body);
    if(error) return res.status(400).json({message: "Bad Request", error})
    next()
}

// user login validation
const loginValidation = (req,res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(40).required()
    });
    const { error } = schema.validate(req.body);
    if(error) return res.status(400).json({message: "Bad Request", error})
    next()
}

module.exports = {
    signupValidation,
    loginValidation
}
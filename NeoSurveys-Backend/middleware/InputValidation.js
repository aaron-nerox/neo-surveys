const Joi = require('joi');

module.exports.validateSurvey = (input)=>{

    const schema = Joi.object({
        name: Joi.string().min(5).required(),
        questions: Joi.array().items(Joi.object({
            statement: Joi.string().required(),
        })).required().min(1)
    });

    return schema.validate(input);
}

module.exports.validateAnswer = (input)=>{

    const schema = Joi.object({
        idSurvey: Joi.number().required(),
        answers: Joi.array().items(Joi.object({
            statement: Joi.string().required(),
            answer: Joi.boolean().required()
        })).required().min(1)
    });

    return schema.validate(input);
}
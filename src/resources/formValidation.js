import Joi from "joi";

const schemaName = Joi.object().keys({
  name: Joi.string()
    .trim()
    .pattern(/(\p{L}*)(\s)(\p{L}*)/u, "Full name")
    .message("Please, enter your name and surname.")
    .min(5)
    .message("Your full name should be at least 5 characters long, including spaces.")
    .max(45)
    .message("Full name is currently limited to 45 characters.")
    .required(),
});

const schemaEmail = Joi.object().keys({
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required(),
});

const schemaMessage = Joi.object().keys({
  message: Joi.string()
    .min(5)
    .message("Your message should be at least 5 characters long."),
});

const schemaComplete = Joi.object().keys({
  name: Joi.string()
    .trim()
    .pattern(/(\p{L}*)(\s)(\p{L}*)/u, "Full name")
    .message("Please, enter your name and surname.")
    .min(5)
    .message("Your full name should be at least 5 characters long, including spaces.")
    .max(45)
    .message("Full name is currently limited to 45 characters.")
    .required(),
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required(),
  message: Joi.string()
    .min(5)
    .message("Your message should be at least 5 characters long."),
});

export { schemaName, schemaEmail, schemaMessage, schemaComplete };

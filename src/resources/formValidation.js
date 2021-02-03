import Joi from "joi";


const schemaValidate = Joi.object().keys({
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
    .message("You must enter a valid email address in order to proceed.")
    .required(),
  message: Joi.string()
    .min(5)
    .message("Your message should be at least 5 characters long."),
});

export default schemaValidate;

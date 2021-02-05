import Joi from "joi";

const schemaValidate = Joi.object().keys({
  name: Joi.string()
    .label("Name input field")
    .required()
    .trim()
    .pattern(/(\b[^\d\W]+\b)(\s)(\b[^\d\W]+\b)/u, "full name")
    .min(5)
    .max(45)
    .messages({
      "string.pattern.name":
        "Please, enter your name AND surname (no numbers allowed!)",
      "string.min":
        "Your full name should be at least 5 characters long, including spaces.",
      "string.max": "Full name is currently limited to 45 characters.",
      "any.required": "Full name is required.",
      "string.empty": "Full name is required.",
    }),
  email: Joi.string()
    .required()
    .trim()
    .email({ tlds: { allow: false } })
    .messages({
      "any.required": "Email is reqired.",
      "email": "You must enter a valid email address.",
      "string.empty": "You must enter a valid email address.",
    }),
  message: Joi.string().required().min(5).messages({
    "string.min": "Message should be at least 5 characters long.",
    "any.required": "Message should be at least 5 characters long.",
    "string.empty": "Message should be at least 5 characters long.",
  }),
});

export default schemaValidate;

import joi from "joi";

export const registerSchema = joi.object({
  name: joi.string().min(2).max(100).required(),
  email: joi.string().email().required(),
  password: joi
    .string()
    .regex(RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$"))
    .required(),
  isActive: joi.boolean(),
});

export const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi
    .string()
    .regex(RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$"))
    .required(),
});

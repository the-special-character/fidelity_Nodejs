export default (schema) => {
  return async (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).send(error);
    } else {
      next();
    }
  };
};

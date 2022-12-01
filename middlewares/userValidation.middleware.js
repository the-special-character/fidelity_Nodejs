export default (req, res, next) => {
  const { body } = req;
  if (body) {
    const { name, email, password } = body;
    const error = [];
    if (!name) {
      error.push("please provide name");
    }
    if (!email) {
      error.push("please provide email");
    }
    if (!password) {
      error.push("please provide password");
    }
    if (error.length > 0) {
      return res.status(400).send(error.join(","));
    } else {
      next();
    }
  }
  return res.status(400).send("Please provide data");
};

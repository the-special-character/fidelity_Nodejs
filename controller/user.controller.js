import User from "../models/users.model";
import bcrypt from "bcrypt";

class UserController {
  static login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Email is not available");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("password is not valid");
      }
      return res.send(user);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  };

  static register = async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}

export default UserController;

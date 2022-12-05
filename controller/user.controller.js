import User from "../models/users.model";
import passport from "passport";

class UserController {
  static login = async (req, res) => {
    return passport.authenticate("local", function (error, user, info) {
      if (error) {
        return res.status(401).send(error.message);
      }
      if (!user) {
        return res.status(401).send("No such user exist");
      }
      const accessToken = user.generateToken();
      return res.status(200).send({ accessToken, user });
    })(req, res);
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

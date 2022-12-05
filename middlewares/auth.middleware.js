import passport from "passport";

export const authMiddleware = (role) => (req, res, next) => {
  return passport.authenticate("jwt", function (error, user, info) {
    if (error) {
      return res.status(401).send(error.message);
    }
    if (!user) {
      return res.status(401).send(info.message);
    }

    if (role && user.role !== role) {
      return res.status(401).send("you are not authorized to do this action");
    }

    next();
  })(req, res, next);
};

import passport from "passport";
import passportLocal from "passport-local";
import passportJWT from "passport-jwt";
import User from "../models/users.model";

const LocalStrategy = passportLocal.Strategy;
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(new Error("Email is not available"));
        }
        if (!user.verifyPassword(password)) {
          return done(new Error("Password is not valid"));
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_PRIVATE_KEY,
    },
    async ({ id }, done) => {
      try {
        const user = await User.findById(id);
        if (!user) {
          return done(new Error("user is not available"));
        }
        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

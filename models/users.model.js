import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "name is required"] },
    email: {
      type: String,
      index: true,
      unique: [true, "Email is not available"],
      required: [true, "Email is required"],
      validate: {
        validator: function (v) {
          return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    password: { type: String, required: [true, "password is required"] },
    isActive: { type: Boolean, default: false },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (data, res) {
        const { password, ...rest } = res;
        return rest;
      },
    },
    versionKey: false,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
  }
  next();
});

userSchema.method({
  verifyPassword: function (password) {
    return bcrypt.compareSync(password, this.password);
  },
  generateToken: function () {
    return jwt.sign(
      { id: this._id, role: this.role },
      process.env.JWT_PRIVATE_KEY,
      {
        expiresIn: "1h",
      }
    );
  },
});

const User = mongoose.model("users", userSchema);

export default User;

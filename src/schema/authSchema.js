import JOI from "joi-browser";

export const AuthSchema = {
  email: JOI.string().email().required().label("Email Address"),
  password: JOI.string().required().label("Password"),
};

export const RegSchema = {
  name: JOI.string().required().label("Customer Name "),
  email: JOI.string().email().required().label("Email Address"),
  password: JOI.string().required().label("Password"),
  passwordConfirm: JOI.string().required().label("Confirm Password"),
  role: JOI.any().allow(),
};

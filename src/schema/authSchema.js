import JOI from "joi-browser";

export const AuthSchema = {
  email: JOI.string()
    .required()
    .label("Email Address")
    .error(() => {
      return {
        message: "email address is not allowed to be empty",
      };
    }),
  password: JOI.string().required().label("Password"),
};

export const RegSchema = {
  name: JOI.string().required().label("Customer Name "),
  email: JOI.string().required().label("Email Address"),
  password: JOI.any().allow(),
  passwordConfirm: JOI.any().allow(),
  role: JOI.any().allow(),
};

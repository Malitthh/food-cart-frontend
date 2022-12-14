import JOI from "joi-browser";

export const AuthSchema = {
  email: JOI.string().email().required().label("Email Address"),
  password: JOI.string().required().label("Password"),
};

export const RegSchema = {
  name: JOI.string().required().label("Customer Name "),
  email: JOI.string().email().required().label("Email Address"),
  password: JOI.string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
    .error((errors) => {
      errors.forEach((err) => {
        err.message =
          "password must be at least 8 characters long and must contain at least one letter, one number, and one special character";
      });
      return errors;
    })
    .required()
    .label("Password"),
  passwordConfirm: JOI.string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
    .error((errors) => {
      errors.forEach((err) => {
        err.message =
          "password must be at least 8 characters long and must contain at least one letter, one number, and one special character";
      });
      return errors;
    })
    .required()
    .label("Confirm Password"),
  role: JOI.any().allow(),
};

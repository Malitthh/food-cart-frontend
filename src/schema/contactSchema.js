import JOI from "joi-browser";

export const ContactSchema = {
  from_name: JOI.string()
    .regex(/^[a-zA-Z\s]+$/)
    .error((errors) => {
      errors.forEach((err) => {
        err.message = "Not a valid Name";
      });
      return errors;
    })
    .required()
    .label(" Name "),
  reply_to: JOI.string().email().required().label("Email Address"),
  contact_no: JOI.string()
    .length(10)
    .regex(/^[0-9]+$/)
    .required()
    .label("Mobile No"),
  message: JOI.string().required(),
};

import JOI from "joi-browser";

export const OrderSchema = {
  //   customerName: JOI.string().required().label("Customer Name "),
  //   customerId: JOI.string().required().label("Customer ID"),
  //   customerEmail: JOI.string().required().label("Email Address"),
  recipientName: JOI.string()
    .required()
    .regex(/^[a-zA-Z\s]+$/)
    .error((errors) => {
      errors.forEach((err) => {
        err.message = "Not a valid Name";
      });
      return errors;
    })
    .label("Recipient Name "),
  recipientMobile: JOI.string()
    .length(10)
    .regex(/^[0-9]+$/)
    .required()
    .label("Recipient Mobile"),
  addressLine1: JOI.string().required().label("Recipient Address Line 1 "),
  //addressLine2: JOI.string().required().label("Recipient Address Line 2"),
  city: JOI.string().required().label("Recipient City"),
  postalCode: JOI.string().required().label("Recipient Postal Code"),
  billingName: JOI.string()
    .required()
    .regex(/^[a-zA-Z\s]+$/)
    .error((errors) => {
      errors.forEach((err) => {
        err.message = "Not a valid Name";
      });
      return errors;
    })
    .label("Billing Name"),
  billingMobile: JOI.string()
    .length(10)
    .regex(/^[0-9]+$/)
    .required()
    .label("Billing Mobile"),
  addressLine1B: JOI.string().required().label("Billing Address Line 1 "),
  addressLine1B: JOI.string().required().label("Billing Address Line 2"),
  cityB: JOI.string().required().label("Billing City"),
  postalCodeB: JOI.string().required().label("Billing Postal Code"),
  // orderItems: JOI.array().allow().label("Order Items"),
};

import JOI from "joi-browser";

export const OrderSchema = {
//   customerName: JOI.string().required().label("Customer Name "),
//   customerId: JOI.string().required().label("Customer ID"),
//   customerEmail: JOI.string().required().label("Email Address"),
  recipientName: JOI.string().required().label("Recipient Name Address"),
  recipientMobile: JOI.string().required().label("Recipient Mobile"),
  addressLine1: JOI.string().required().label("Recipient Address Line 1 "),
  //addressLine2: JOI.string().required().label("Recipient Address Line 2"),
  city: JOI.string().required().label("Recipient City"),
  postalCode: JOI.string().required().label("Recipient Postal Code"),
  billingName: JOI.string().required().label("Billing Name Address"),
  billingMobile: JOI.string().required().label("Billing Mobile"),
  addressLine1B: JOI.string().required().label("Billing Address Line 1 "),
  addressLine1B: JOI.string().required().label("Billing Address Line 2"),
  cityB: JOI.string().required().label("Billing City"),
  postalCodeB: JOI.string().required().label("Billing Postal Code"),
 // orderItems: JOI.array().allow().label("Order Items"),
};

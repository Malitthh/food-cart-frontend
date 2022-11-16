import JOI from "joi-browser";

export const CustomerSchema = {
  name: JOI.string().required().label("Customer Name "),
  email: JOI.string().required().label("Email Address"),
  mobileNo: JOI.string().length(10).regex(/^[0-9]+$/).required().label("Mobile No"),
  nic: JOI.string().required().label("NIC"),
  address: JOI.string().required().label("address"),
};

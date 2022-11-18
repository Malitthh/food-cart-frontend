import JOI from "joi-browser";

export const CustomerSchema = {
  name: JOI.string().required().label("Customer Name "),
  email: JOI.string().required().label("Email Address"),
  mobileNo: JOI.string()
    .length(10)
    .regex(/^[0-9]+$/)
    .required()
    .label("Mobile No"),
  nic: JOI.string().required().label("NIC"),
  address: JOI.string().required().label("address"),
  password: JOI.any().allow(),
  passwordConfirm: JOI.any().allow(),
  role: JOI.any().allow(),
  province: JOI.any().allow(),
  gender: JOI.any().allow(),
};

export const CustomerSchemaUpdate = {
  name: JOI.string().required().label("Customer Name "),
  email: JOI.string().required().label("Email Address"),
  mobileNo: JOI.string()
    .length(10)
    .regex(/^[0-9]+$/)
    .required()
    .label("Mobile No"),
  nic: JOI.string().required().label("NIC"),
  address: JOI.string().required().label("address"),
  password: JOI.any().allow(),
  passwordConfirm: JOI.any().allow(),
  role: JOI.any().allow(),
  activated: JOI.any().allow(),
  _id: JOI.any().allow(),
  __v: JOI.any().allow(),
};

export const EmployeeSchema = {
  name: JOI.string().required().label("Customer Name "),
  email: JOI.string().required().label("Email Address"),
  mobileNo: JOI.string()
    .length(10)
    .regex(/^[0-9]+$/)
    .required()
    .label("Mobile No"),
  nic: JOI.string().required().label("NIC"),
  address: JOI.string().required().label("address"),
  password: JOI.any().allow(),
  passwordConfirm: JOI.any().allow(),
  role: JOI.any().allow(),
  dob: JOI.any().allow(),
  salary: JOI.number().allow(),
  joinDate: JOI.any().allow(),
  dept: JOI.any().allow(),
  gender: JOI.any().allow(),
};

export const EmployeeSchemaUpdate = {
  name: JOI.string().required().label("Customer Name "),
  email: JOI.string().required().label("Email Address"),
  mobileNo: JOI.string()
    .length(10)
    .regex(/^[0-9]+$/)
    .required()
    .label("Mobile No"),
  nic: JOI.string().required().label("NIC"),
  address: JOI.string().required().label("address"),
  password: JOI.any().allow(),
  passwordConfirm: JOI.any().allow(),
  role: JOI.any().allow(),
  dob: JOI.any().allow(),
  salary: JOI.number().allow(),
  joinDate: JOI.any().allow(),
  dept: JOI.any().allow(),
  gender: JOI.any().allow(),
  activated: JOI.any().allow(),
  _id: JOI.any().allow(),
  __v: JOI.any().allow(),
};

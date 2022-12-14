import JOI from "joi-browser";

export const CustomerSchema = {
  name: JOI.string()
    .regex(/^[a-zA-Z\s]+$/)
    .error((errors) => {
      errors.forEach((err) => {
        err.message = "Not a valid Name";
      });
      return errors;
    })
    .required()
    .label("Customer Name "),
  email: JOI.string().email().required().label("Email Address"),
  mobileNo: JOI.string()
    .length(10)
    .regex(/^[0-9]+$/)
    .required()
    .label("Mobile No"),
  nic: JOI.string()
    .required()
    .regex(/^[0-9]{9}[V|v|X|x]$/)
    .error((errors) => {
      errors.forEach((err) => {
        err.message = "Not a valid NIC";
      });
      return errors;
    })
    .label("NIC"),
  address: JOI.string().required().label("address"),
  password: JOI.any().required().label("Password"),
  passwordConfirm: JOI.any().required().label("Password Conifrmation"),
  role: JOI.any().allow(),
  province: JOI.any().required().label("Province"),
  gender: JOI.any().required().label("Gender"),
};

export const CustomerSchemaUpdate = {
  name: JOI.string()
    .required()
    .regex(/^[a-zA-Z\s]+$/)
    .error((errors) => {
      errors.forEach((err) => {
        err.message = "Not a valid Name";
      });
      return errors;
    })
    .label("Customer Name "),
  email: JOI.string().required().email().label("Email Address"),
  mobileNo: JOI.string()
    .length(10)
    .regex(/^[0-9]+$/)
    .required()
    .label("Mobile No"),
  nic: JOI.string()
    .required()
    .regex(/^[0-9]{9}[V|v|X|x]$/)
    .error((errors) => {
      errors.forEach((err) => {
        err.message = "Not a valid NIC";
      });
      return errors;
    })
    .label("NIC"),
  address: JOI.string().required().label("address"),
  password: JOI.any().allow(),
  passwordConfirm: JOI.any().allow(),
  role: JOI.any().allow(),
  activated: JOI.any().allow(),
  province: JOI.any().required().label("Province"),
  _id: JOI.any().allow(),
  __v: JOI.any().allow(),
};

export const EmployeeSchema = {
  name: JOI.string()
    .required()
    .regex(/^[a-zA-Z\s]+$/)
    .error((errors) => {
      errors.forEach((err) => {
        err.message = "Not a valid Name";
      });
      return errors;
    })
    .label("Employee Name "),
  email: JOI.string().email().required().label("Email Address"),
  mobileNo: JOI.string()
    .length(10)
    .regex(/^[0-9]+$/)
    .required()
    .label("Mobile No"),
  nic: JOI.string()
    .required()
    .regex(/^[0-9]{9}[V|v|X|x]$/)
    .error((errors) => {
      errors.forEach((err) => {
        err.message = "Not a valid NIC";
      });
      return errors;
    })
    .label("NIC"),
  address: JOI.string().required().label("Address"),
  password: JOI.any().required().label("Password"),
  passwordConfirm: JOI.any().required().label("Password Confirmation"),
  role: JOI.any().allow(),
  dob: JOI.any().required().label("Date of Birth"),
  salary: JOI.number().required().label("Salary"),
  joinDate: JOI.any().required().label("Joined Date"),
  dept: JOI.any().required().label("Department"),
  gender: JOI.any().required().label("Gender"),
};

export const EmployeeSchemaUpdate = {
  name: JOI.string()
    .required()
    .regex(/^[a-zA-Z\s]+$/)
    .error((errors) => {
      errors.forEach((err) => {
        err.message = "Not a valid Name";
      });
      return errors;
    })
    .label("Employee Name "),
  email: JOI.string().email().required().label("Email Address"),
  mobileNo: JOI.string()
    .length(10)
    .regex(/^[0-9]+$/)
    .required()
    .label("Mobile No"),
  nic: JOI.string()
    .required()
    .regex(/^[0-9]{9}[V|v|X|x]$/)
    .error((errors) => {
      errors.forEach((err) => {
        err.message = "Not a valid NIC";
      });
      return errors;
    })
    .label("NIC"),
  address: JOI.string().required().label("address"),
  password: JOI.any().allow(),
  passwordConfirm: JOI.any().allow(),
  role: JOI.any().allow(),
  dob: JOI.any().required().label("Date of Birth"),
  salary: JOI.number().required().label("Salary"),
  joinDate: JOI.any().required().label("Joined Date"),
  dept: JOI.any().required().label("Department"),
  gender: JOI.any().required().label("Gender"),
  activated: JOI.any().allow(),
  _id: JOI.any().allow(),
  __v: JOI.any().allow(),
};

export const SupplierSchema = {
  name: JOI.string()
    .required()
    .regex(/^[a-zA-Z\s]+$/)
    .error((errors) => {
      errors.forEach((err) => {
        err.message = "Not a valid Name";
      });
      return errors;
    })
    .label("Supplier Name "),
  email: JOI.string().email().required().label("Email Address"),
  mobileNo: JOI.string()
    .length(10)
    .regex(/^[0-9]+$/)
    .required()
    .label("Mobile No"),
  address: JOI.string().required().label("address"),
  password: JOI.any().required().label("Password"),
  passwordConfirm: JOI.any().required().label("Password Confirmation"),
  role: JOI.any().required(),
  joinDate: JOI.any().required().label("Joined Date"),
//  category: JOI.any().required().label("Category"),
};

export const SupplierSchemaUpdate = {
  name: JOI.string()
    .required()
    .regex(/^[a-zA-Z\s]+$/)
    .error((errors) => {
      errors.forEach((err) => {
        err.message = "Not a valid Name";
      });
      return errors;
    })
    .label("Supplier Name "),
  email: JOI.string().email().required().label("Email Address"),
  mobileNo: JOI.string()
    .length(10)
    .regex(/^[0-9]+$/)
    .required()
    .label("Mobile No"),
  address: JOI.string().required().label("address"),
  password: JOI.any().allow(),
  passwordConfirm: JOI.any().allow(),
  role: JOI.any().allow(),
//  category: JOI.any().required().label("Category"),
  joinDate: JOI.any().required().label("Joined Date"),
  activated: JOI.any().allow(),
  _id: JOI.any().allow(),
  __v: JOI.any().allow(),
};

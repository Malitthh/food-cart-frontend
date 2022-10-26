import JOI from "joi-browser";

/**
 * Validate Form
 * @param {object} data form data
 * @param {object} schema - validation schema
 * @returns array
 */
export const validateForm = (data, schema) => {
  const result = JOI.validate(data, schema, { abortEarly: false });
  if (!result.error) return null;

  const errors = [];

  for (let item of result.error.details) errors[item.path[0]] = item.message;

  return errors ? errors : null;
};

/**
 * validate from property
 * @param {string} name
 * @param {any} value
 * @param {object} schema
 * @returns string
 */
export const validateProperty = (name, value, schema) => {
  const validateObj = { [name]: value };
  const schemaFiled = { [name]: schema[name] };
  const { error } = JOI.validate(validateObj, schemaFiled);
  return error ? error.details[0].message : null;
};
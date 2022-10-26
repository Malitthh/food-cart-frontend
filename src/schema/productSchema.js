import JOI from "joi-browser";

export const ProductSchema = {
  productName: JOI.string()
    .required()
    .label("Product Name")
    .error(() => {
      return {
        message: "Product Name is not allowed to be empty",
      };
    }),
  costPrice: JOI.number().required().label("Cost Price"),
  price: JOI.number().required().label("Price"),
  stock: JOI.number().required().label("Stock"),
  category: JOI.string()
    .required()
    .label("Category")
    .error(() => {
      return {
        message: "Category is not allowed to be empty",
      };
    }),
  description: JOI.string()
    .required()
    .label("Description")
    .error(() => {
      return {
        message: "Description is not allowed to be empty",
      };
    }),
};

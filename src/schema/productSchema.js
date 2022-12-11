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
  price: JOI.number().allow().label("Price"),
  stock: JOI.number().required().label("Stock"),
  sold: JOI.number().allow().label("Stock"),
  lowStock: JOI.number().required().label("Low Stock"),
  supplierId: JOI.string().allow().label("Supplier"),
  supplierName: JOI.any().allow().label("Supplier Name"),
  supplierEmail: JOI.any().allow().label("Supplier Email"),
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
  photos: JOI.array().required().label("Photo"),
};

export const ProductSchemaUpdate = {
  productName: JOI.string()
    .required()
    .label("Product Name")
    .error(() => {
      return {
        message: "Product Name is not allowed to be empty",
      };
    }),
  costPrice: JOI.number().required().label("Cost Price"),
  price: JOI.number().allow().label("Price"),
  stock: JOI.number().required().label("Stock"),
  lowStock: JOI.number().required().label("Low Stock"),
  sold: JOI.number().allow().label("Stock"),
  supplierId: JOI.string().allow().label("Supplier"),
  supplierName: JOI.any().allow().label("Supplier Name"),
  supplierEmail: JOI.any().allow().label("Supplier Email"),
  isReviewed: JOI.any().allow().label("Reviewed"),
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
  _id: JOI.any().allow(),
  __v: JOI.any().allow(),
  photos: JOI.any().allow().label("Photo"),
};


export const AdminProductSchema = {
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
  sold: JOI.number().allow().label("Stock"),
  lowStock: JOI.number().required().label("Low Stock"),
  supplierId: JOI.string().allow().label("Supplier"),
  supplierName: JOI.any().allow().label("Supplier Name"),
  supplierEmail: JOI.any().allow().label("Supplier Email"),
  isReviewed: JOI.any().allow().label("Reviewed"),
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
  photos: JOI.array().required().label("Photo"),
};

export const AdminProductSchemaUpdate = {
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
  lowStock: JOI.number().required().label("Low Stock"),
  sold: JOI.number().allow().label("Stock"),
  supplierId: JOI.string().allow().label("Supplier"),
  supplierName: JOI.any().allow().label("Supplier Name"),
  supplierEmail: JOI.any().allow().label("Supplier Email"),
  isReviewed: JOI.any().allow().label("Reviewed"),
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
  _id: JOI.any().allow(),
  __v: JOI.any().allow(),
  photos: JOI.any().allow().label("Photo"),
};

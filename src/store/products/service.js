import axios from "axios";
import { apiUrl } from "config";

/**
 * Damage Report service, connecting with database using axios
 */

class ProductsService {
  static addProduct = ({data, token}) =>
    axios.post(`${apiUrl}/v1/products`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

  static getProducts = () =>
    axios.get(`${apiUrl}/v1/products`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    static getSingleProduct = (id) =>
    axios.get(`${apiUrl}/v1/products/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    static updateProduct = ({ data, token}) =>
    axios.patch(`${apiUrl}/v1/products/${data._id}`, data, {
      headers: {
        "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
      },
    });

    static deleteProduct = ({id, token}) =>
    axios.delete(`${apiUrl}/v1/products/${id}`,{
      headers: {
        "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
      },
    });
}

export default ProductsService;

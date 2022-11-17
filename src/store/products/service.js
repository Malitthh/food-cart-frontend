import axios from "axios";
import { apiUrl } from "config";

/**
 * Damage Report service, connecting with database using axios
 */

class ProductsService {
  static addProduct = (payload) =>
    axios.post(`${apiUrl}/v1/products`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTc2MTg5MGM1NTc0MzNhYzY2YWIxNCIsImlhdCI6MTY2NTI5MzczNiwiZXhwIjoxNjczMDY5NzM2fQ.e3WCIabtt7uvyYIOffgp1oYL7e23yzJkT04g8WGmZFw`,
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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTc2MTg5MGM1NTc0MzNhYzY2YWIxNCIsImlhdCI6MTY2NTI5MzczNiwiZXhwIjoxNjczMDY5NzM2fQ.e3WCIabtt7uvyYIOffgp1oYL7e23yzJkT04g8WGmZFw`,
      },
    });

    static updateProduct = (payload) =>
    axios.patch(`${apiUrl}/v1/products/${payload._id}`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTc2MTg5MGM1NTc0MzNhYzY2YWIxNCIsImlhdCI6MTY2NTI5MzczNiwiZXhwIjoxNjczMDY5NzM2fQ.e3WCIabtt7uvyYIOffgp1oYL7e23yzJkT04g8WGmZFw`,
      },
    });

    static deleteProduct = (id) =>
    axios.delete(`${apiUrl}/v1/products/${id}`,{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTc2MTg5MGM1NTc0MzNhYzY2YWIxNCIsImlhdCI6MTY2NTI5MzczNiwiZXhwIjoxNjczMDY5NzM2fQ.e3WCIabtt7uvyYIOffgp1oYL7e23yzJkT04g8WGmZFw`,
      },
    });
}

export default ProductsService;

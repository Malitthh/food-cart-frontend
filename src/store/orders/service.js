import axios from "axios";
import { apiUrl } from "config";

class OrderService {
  static addOrder = ({data, token}) =>
    axios.post(`${apiUrl}/v1/orders`, data, {
      headers: {
        "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
      },
    });

  static getOrders = () =>
    axios.get(`${apiUrl}/v1/orders`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

  static getOneOrder = ({id, token}) =>
    axios.get(`${apiUrl}/v1/orders/${id}`, {
      headers: {
        "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
      },
    });

  static updateOrder = ({data, token}) =>
    axios.patch(`${apiUrl}/v1/orders/${data._id}`, data, {
      headers: {
        "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
      },
    });
}

export default OrderService;

import axios from "axios";
import { apiUrl } from "config";

class OrderService {
  static addOrder = (payload) =>
    axios.post(`${apiUrl}/v1/orders`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTc2MTg5MGM1NTc0MzNhYzY2YWIxNCIsImlhdCI6MTY2NTI5MzczNiwiZXhwIjoxNjczMDY5NzM2fQ.e3WCIabtt7uvyYIOffgp1oYL7e23yzJkT04g8WGmZFw`,
      },
    });

  static getOrders = () =>
    axios.get(`${apiUrl}/v1/orders`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

  static getOneOrder = (payload) =>
    axios.get(`${apiUrl}/v1/orders/${payload}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTc2MTg5MGM1NTc0MzNhYzY2YWIxNCIsImlhdCI6MTY2NTI5MzczNiwiZXhwIjoxNjczMDY5NzM2fQ.e3WCIabtt7uvyYIOffgp1oYL7e23yzJkT04g8WGmZFw`,
      },
    });

  static updateOrder = (payload) =>
    axios.patch(`${apiUrl}/v1/orders/${payload.id}`, payload.data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTc2MTg5MGM1NTc0MzNhYzY2YWIxNCIsImlhdCI6MTY2NTI5MzczNiwiZXhwIjoxNjczMDY5NzM2fQ.e3WCIabtt7uvyYIOffgp1oYL7e23yzJkT04g8WGmZFw`,
      },
    });
}

export default OrderService;

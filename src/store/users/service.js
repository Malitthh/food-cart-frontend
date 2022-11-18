import axios from "axios";
import { apiUrl } from "config";
/**
 * UserService, connecting with database using axios
 */

class UserService {
  static addUser = ({ data, token}) =>
    axios.post(`${apiUrl}/v1/users`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

  static getUsers = (payload) =>
    axios.get(`${apiUrl}/v1/users`, {
      headers: {
        "Content-Type": "application/json",
      },
      params: { role: payload },
    });

  static deleteUser = ({id, token}) =>
    axios.delete(`${apiUrl}/v1/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
       Authorization: `Bearer ${token}`,
      },
    });

  static updateUser = ({data, token}) =>
    axios.patch(`${apiUrl}/v1/users/${data._id}`, data, {
      headers: {
        "Content-Type": "application/json",
       Authorization: `Bearer ${token}`,
      },
    });
}

export default UserService;

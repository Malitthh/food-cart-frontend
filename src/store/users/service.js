import axios from "axios";
import { apiUrl } from "config";

/**
 * UserService, connecting with database using axios
 */

class UserService {
  static addUser = (payload) =>
    axios.post(`${apiUrl}/v1/users`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTc2MTg5MGM1NTc0MzNhYzY2YWIxNCIsImlhdCI6MTY2NTI5MzczNiwiZXhwIjoxNjczMDY5NzM2fQ.e3WCIabtt7uvyYIOffgp1oYL7e23yzJkT04g8WGmZFw`,
      },
    });

  static getUsers = (payload) =>
    axios.get(`${apiUrl}/v1/users`, {
      headers: {
        "Content-Type": "application/json",
      },
      params: { role: payload },
    });

  static deleteUser = (id) =>
    axios.delete(`${apiUrl}/v1/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTc2MTg5MGM1NTc0MzNhYzY2YWIxNCIsImlhdCI6MTY2NTI5MzczNiwiZXhwIjoxNjczMDY5NzM2fQ.e3WCIabtt7uvyYIOffgp1oYL7e23yzJkT04g8WGmZFw`,
      },
    });

  static updateUser = (payload) =>
    axios.patch(`${apiUrl}/v1/users/${payload._id}`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTc2MTg5MGM1NTc0MzNhYzY2YWIxNCIsImlhdCI6MTY2NTI5MzczNiwiZXhwIjoxNjczMDY5NzM2fQ.e3WCIabtt7uvyYIOffgp1oYL7e23yzJkT04g8WGmZFw`,
      },
    });
}

export default UserService;

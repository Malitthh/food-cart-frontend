import axios from "axios";
import { apiUrl } from "config";


/**
 * Damage Report service, connecting with database using axios
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
    axios.get(`${apiUrl}/v1/users?${payload}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
}

export default UserService;

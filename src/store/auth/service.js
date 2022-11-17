import axios from "axios";
import { apiUrl } from "config";

/**
 * auth service, connecting with database using axios
 */

class AuthService {
  static login = (payload) =>
    axios.post(`${apiUrl}/v1/login`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

  static signup = (payload) =>
    axios.post(`${apiUrl}/v1/signup`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
}

export default AuthService;

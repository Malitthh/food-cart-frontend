import axios from "axios";
import { apiUrl } from "config";

/**
 * Damage Report service, connecting with database using axios
 */

class VehicleService {
  static add = (payload) =>
    axios.post(`${apiUrl}/v1/vehicles`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
}

export default VehicleService;

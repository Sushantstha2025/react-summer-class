const BASE_URL = "/api";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const apiRequest = async (endpoint, method = "GET", body = null, isFormData = false) => {
  const headers = getAuthHeader();
  
  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  const config = {
    method,
    headers,
  };

  if (body) {
    config.body = isFormData ? body : JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, config);
const contentType = response.headers.get('content-type') || '';

let data;

try {
  if (contentType.includes('application/json')) {
    data = await response.json();
  } else {
    const text = await response.text();

    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
  }
} catch (error) {
  throw new Error(`Failed to parse server response: ${error.message}`);
}

if (!response.ok) {
  const message =
    typeof data === 'object' && data !== null
      ? data.message || data.error
      : data;

  throw new Error(
    message || `Request failed with status ${response.status}`
  );
}

return data;

};

export const authAPI = {
  login: (credentials) => apiRequest("/user/login", "POST", credentials),
  register: (userData) => apiRequest("/user/register", "POST", userData),
  forgotPassword: (body) => apiRequest("/reset", "POST", body),
  verifyOTP: (body) => apiRequest("/reset/verify-otp", "POST", body),
  resetPassword: (body) => apiRequest("/reset/reset-password", "POST", body),
  getProfile: (userId) => apiRequest(userId ? `/user/profile/${userId}` : "/user/profile", "GET"),
};

export const vehicleAPI = {
  getAllCars: () => apiRequest("/cars/getCars", "GET"),
  getCarById: (id) => apiRequest(`/cars/getCar/${id}`, "GET"),
  createCar: (carData) => apiRequest("/cars/createCars", "POST", carData, carData instanceof FormData),
  updateCar: (id, carData) => apiRequest(`/cars/updateCar/${id}`, "PATCH", carData, carData instanceof FormData),
  deleteCar: (id) => apiRequest(`/cars/deleteCar/${id}`, "DELETE"),
};

export const rentalAPI = {
  bookVehicle: (vehicleId, bookingData) => apiRequest(`/rents/bookVehicle/${vehicleId}`, "POST", bookingData),
  getUserBookings: (userId) => apiRequest(userId ? `/rents/getBooking/${userId}` : "/rents/getBooking", "GET"),
  getAllBookings: () => apiRequest("/rents/allBookings", "GET"),
  cancelBooking: (id) => apiRequest(`/rents/deleteBooking/${id}`, "DELETE"),
};

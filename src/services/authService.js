import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

// Function to handle user login
const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    return response.data; // Assuming your API returns the token in `response.data`
  } catch (error) {
    console.error("Login failed:", error.response.data);
    throw new Error(error.response.data.message || "Login failed");
  }
};

// Function to handle user registration
const register = async (username, password, role) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      password,
      role,
    });
    return response.data; // Assuming the API returns token or success message in `response.data`
  } catch (error) {
    console.error("Registration failed:", error.response.data);
    throw new Error(error.response.data.message || "Registration failed");
  }
};

// Function to fetch user details based on the token
const getUserDetails = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Assuming `response.data` contains user info
  } catch (error) {
    console.error("Fetching user details failed:", error.response.data);
    throw new Error(
      error.response.data.message || "Unable to fetch user details"
    );
  }
};

// Export the functions
const authService = {
  login,
  register,
  getUserDetails,
};

export default authService;

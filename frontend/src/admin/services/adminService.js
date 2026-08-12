import axios from "axios";

const API = "http://localhost:8080/api/admin";

// Dashboard statistics
export const getDashboardStats = async () => {
  const response = await axios.get(`${API}/dashboard`);
  return response.data;
};

// Get all loan applications
export const getAllApplications = async () => {
  const response = await axios.get(`${API}/applications`);
  return response;
};

// Update application status
export const updateApplicationStatus = async (id, status) => {
  const response = await axios.put(
    `${API}/applications/${id}/status`,
    { status }
  );

  return response.data;
};
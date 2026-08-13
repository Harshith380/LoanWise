import axios from "axios";

// Spring Boot backend
const API = `${import.meta.env.VITE_API_URL}/api/admin`;

// ==============================
// Dashboard Statistics
// ==============================
export const getDashboardStats = async () => {
  const response = await axios.get(
    `${API}/dashboard`
  );

  console.log(
    "Dashboard Stats API:",
    response.data
  );

  return response.data;
};

// ==============================
// Get All Loan Applications
// ==============================
export const getAllApplications = async () => {
  const response = await axios.get(
    `${API}/applications`
  );

  console.log(
    "Get Applications API:",
    response.data
  );

  return response.data;
};

// ==============================
// Update Loan Application Status
// ==============================
export const updateApplicationStatus = async (
  id,
  status
) => {
  const response = await axios.put(
    `${API}/applications/${id}/status`,
    {
      status: status,
    }
  );

  console.log(
    "Update Application API:",
    response.data
  );

  return response.data;
};

// ==============================
// Get All Users
// ==============================
export const getAllUsers = async () => {
  const response = await axios.get(
    `${API}/users`
  );

  console.log(
    "Get Users API:",
    response.data
  );

  return response.data;
};
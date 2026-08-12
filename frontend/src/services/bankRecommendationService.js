import axios from "axios";

const API_URL =
  "http://localhost:8080/api/recommendations";

export const getRecommendedBanks = async (
  loanType,
  loanAmount,
  userId
) => {

  const response = await axios.get(
    `${API_URL}/banks`,
    {
      params: {
        loanType,
        loanAmount,
        userId
      }
    }
  );

  return response.data;
};
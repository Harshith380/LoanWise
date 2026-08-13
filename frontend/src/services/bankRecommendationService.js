import axios from "axios";

const API_URL =
  `${import.meta.env.VITE_API_URL}/api/recommendations`;

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
        userId,
      },
    }
  );

  return response.data;
};
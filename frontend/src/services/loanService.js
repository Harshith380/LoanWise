import API from "./api";


export const applyLoan = (data) => {
    return API.post("/applications", data);
};


export const getUserApplications = (userId) => {
    return API.get(`/applications/user/${userId}`);
};
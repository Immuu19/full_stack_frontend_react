import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:1400/api/v1/",
});
const tokenn =  localStorage.getItem("fittrack-app-token");
/** console.log("tokkkkk",tokenn); */
export const UserSignUp = async (data) => API.post("/user/register", data);
export const UserSignIn = async (data) => API.post("/user/login", data);


export const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${tokenn}` },
  },
);

export const getProfile = async (token) =>
  API.get("/user/profile", {
    headers: { Authorization: `Bearer ${tokenn}` },
  },console.log("HEREEEE",tokenn)
);


export const getWorkouts = async (token, date) =>
  await API.get(`/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  await API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

  export const getworkoutplan = async (token, data) =>
    await API.post(`/user/workoutplans`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

export const shareachievement = async (token, data) =>
    await API.post(`/user/share`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
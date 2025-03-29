import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const USER_ENDPOINT = "api/v1/users"

const USER_API_URL =  API_BASE_URL + USER_ENDPOINT

// Public Routes
// Resister | Signup user
export const createUser = (userObj) => {
    const response = axios
                        .post(USER_API_URL, userObj)
                        .then(res => res.data)
                        .catch(e => console.log(e))
    return response;
}

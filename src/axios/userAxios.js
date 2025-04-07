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

// Verify user email | Patch request
export const verifyUserEmail = (userEmail, token) => {
    const response = axios
                        .patch(USER_API_URL, {userEmail, token})
                        .then(res => res.data)
                        .catch(e => console.log(e))
    return response;
}

// Login user | Get request
export const loginUser = (userObj) => {
    const response = axios
                        .get(`${USER_API_URL}/login`, userObj)
                        .then(res => res.data)
                        .catch(e => console.log(e))
    return response;
}

// Private Endpoint
// Get user |  Get Request
export const getUser = () => {
    const response = axios
                        .get(USER_API_URL, {
                            header: {
                                Authorization: sessionStorage.getItem(jwtAccessToken)
                            }
                        })
                        .then(res => res.data)
                        .catch(e => console.log(e))
    return response;
}
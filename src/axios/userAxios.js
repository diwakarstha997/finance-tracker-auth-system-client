import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const USER_ENDPOINT = "api/v1/users"

const USER_API_URL =  API_BASE_URL + USER_ENDPOINT

// Public Routes
// Resister | Signup user
export const createUser = async (userObj) => {
    const response = await axios
                        .post(USER_API_URL, userObj)
                        .then(res => res.data)
                        .catch(e => console.log(e))
    return response;
}

// Verify user email | Patch request
export const verifyUserEmail = async (userEmail, token) => {
    const response = await axios
                        .patch(USER_API_URL, {userEmail, token})
                        .then(res => res.data)
                        .catch(e => console.log(e))
    return response;
}

// Login user | Get request
export const loginUser = async (userObj) => {
    const response = await axios
                        .post(`${USER_API_URL}/login`, userObj)
                        .then(res => res.data)
                        .catch(e => console.log(e))
    return response;
}

// Private Endpoint
// Get user |  Get Request
export const getUser = async () => {
    const response = await axios
                        .get(USER_API_URL, {
                            headers: {
                                Authorization: sessionStorage.getItem("accessJWT")
                            }
                        })
                        .then(res => res.data)
                        .catch(e => console.log(e))
    return response;
}

// Get New Access Token | GET
export const getAccessToken = async () => {
    const response = await axios
                        .get(`${USER_API_URL}/accessJWT`, {
                            headers: {
                                Authorization: localStorage.getItem("refreshJWT")
                            }
                        })
                        .then(res => res.data)
                        .catch(e => console.log(e))
    return response;
}

// Logout User Process | POST
export const logoutUser = async () => {
    const response = await axios
                        .post(`${USER_API_URL}/logout`, 
                            {},
                            {
                            headers: {
                                Authorization: sessionStorage.getItem("accessJWT")
                            }
                        })
                        .then(res => res.data)
                        .catch(e => console.log(e))
    return response;
}
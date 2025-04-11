import { getAccessToken, getUser, logoutUser } from "../../axios/userAxios"
import { setUser } from "./userSlice";

// get user action
export const getUserAction = () => async (dispatch) => {
    // call axios request to get user data
    const response = await getUser();

    // if token invalid response with error
    if(response?.status == "error"){
        if(response.message == "Invalid Token"){
            sessionStorage.setItem("accessJWT","");
        }
        return response;
    }  

    // if token valid dispatch an action
    dispatch(setUser(response.data));
}

// Auto login Action
export const autoLoginAction = () => async(dispatch) => {
    // fetch access JWT and refresh JWT from session and local storage
    const accessJWT = sessionStorage.getItem("accessJWT");
    const refreshJWT = localStorage.getItem("refreshJWT");

    // if both access token and refresh token doesnot exist
    if(!accessJWT && !refreshJWT) {
        return
    }

    // if access token doesnot exist
    if(!accessJWT && refreshJWT) {
        const result = await getAccessToken();

        if(result.status == "error"){
            return
        }

        sessionStorage.setItem("accessJWT", result.data);
        dispatch(getUserAction());
    }

    // if access token exist dispatch get user action 
    dispatch(getUserAction());
}

// Logout user action
export const logoutUserAction = () => async(dispatch) => {
    // call to api to delete user session
    const result = await logoutUser();

    if(result.status == "error"){
        return
    }

    // if success
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");

    // clear state
    dispatch(setUser({}));
}
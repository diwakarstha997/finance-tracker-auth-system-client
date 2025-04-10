import { getUser } from "../../axios/userAxios"
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
    console.log("response data:", response);
    

    // if token valid dispatch an action
    dispatch(setUser(response.data));
}

// Auto login Action
export const autoLoginAction = () => async(dispatch) => {
    // fetch access JWT and refresh JWT from session and local storage
    const accessJWT = sessionStorage.getItem("accessJWT");
    const refreshJWT = localStorage.getItem("refreshJWT");


    // if both token exist dispatch get user action
    if(accessJWT && refreshJWT){
        console.log("get user action");
        
        dispatch(getUserAction());
    }
}
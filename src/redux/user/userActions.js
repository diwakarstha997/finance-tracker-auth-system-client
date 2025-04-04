import { getUser } from "../../axios/userAxios"
import { setUser } from "./userSlice";

export const getUserAction = () => async (dispatch) => {
    // call axios request to get user data
    const response = await getUser();

    // if token invalid response with error
    if(response?.status == "error"){
        if(response.message == "Invalid Token"){
            sessionStorage.setItem("jwtAccessToken","");
        }
        return response.message;
    }

    // if token valid dispatch an action
    dispatch(setUser(response.data));
}
import { Button, Form } from "react-bootstrap";
import InputField from "./InputField";
import { useEffect, useState } from "react";
import { loginUser } from "../axios/userAxios";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../redux/user/userActions";
import { useLocation, useNavigate } from "react-router";


const initialFormData = {
    email: "",
    password: "",
}
const LoginForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();

    const handleOnSubmit = async () => {
        e.preventDefault();

        // call axios request to login user
        const response = await loginUser(formData);

        if(response.status == "error"){
            setErrorMessage(response.message);
        }

        // if success store jwt access token on session and refresh token local storage
        sessionStorage.setItem("jwtAccessToken", response.data.jwtAccessToken);
        localStorage.setItem("jwtRefreshToken", response.data.jwtRefreshToken)

        // dispatch an action to get the user data
        const result = dispatch(getUserAction());

        if(result.status == "error"){
            setErrorMessage(result.message);
        }
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    // check if user exists
    const { user } = useSelector( state => state.user );

    // navigate to user private route if login is success
    const navigate = useNavigate();

    useEffect(() => {
        if(user?._id){
            navigate("/auth/home")
        }
    }, [navigate, user])

    return(
        <Form onSubmit={handleOnSubmit}>
            <InputField
                label="Email"
                inputFieldAttribute={{
                    type: "email",
                    name: "email",
                    value: formData.email,
                    onChange: handleOnChange,
                    required: true
                }}
            />

            <InputField
                label="Password"
                inputFieldAttribute={{
                    type: "password",
                    name: "password",
                    value: formData.password,
                    onChange: handleOnChange,
                    required: true
                }}
            />

            <div className="d-grid">
                <Button type="submit" className="btn-dark my-3 px-5 py-2" >Sign up</Button>
            </div>
        </Form>
    )
}

export default LoginForm;
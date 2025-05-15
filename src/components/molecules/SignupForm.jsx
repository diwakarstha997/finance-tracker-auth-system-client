import { Button, Form } from "react-bootstrap"
import InputField from "../atoms/InputField"
import { useState } from "react"
import { createUser } from "../../axios/userAxios"
import { Navigate, redirect, useNavigate } from "react-router"
import CustomTag from "../atoms/CustomTag"

const initialValue = {
    email: "",
    password: "",
    confirm_password: ""
}

const SignupForm = () => {
    const [formData, setFormData] = useState(initialValue);
    const { email, password, confirm_password } = formData;
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleOnSubmit = async(e) => {
        e.preventDefault();

        setErrorMessage("");

        if(!isPasswordValid){
            return;
        }

        // send api request to create user
        const result = await createUser({
            email,
            password
        })
        
        // error handling
        if(result.status === "error"){
            setErrorMessage(result.message)
            return;
        }

        console.log(email);
        // success
        navigate(
            `/register-success/${email}`,
           {
            state: {
                email
            }
           }
        );
    }

    const matchPassword = (first_password, second_password) => {
        if(first_password != "" && second_password != "" && first_password !== second_password) {
            setIsPasswordValid(false);
            return;
        }
        setIsPasswordValid(true);
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })

        // Checks password and confirm_password match 
        if(name == "password" && confirm_password) matchPassword(value, confirm_password);
        if(name == "confirm_password") matchPassword(password, value)
    }

    return(
        <Form onSubmit={handleOnSubmit}>
            {errorMessage != "" && 
                <div className="d-flex justify-content-center">
                    <CustomTag 
                        label={`${errorMessage}`}
                        className="border border-danger border-1 bg-danger bg-opacity-25 text-danger fw-bold px-5 py-2"
                    /> 
                </div>
            }

            <InputField 
                label="Email" 
                inputFieldAttribute={{
                    type: "email",
                    name: "email",
                    value: formData.email,
                    onChange: handleOnChange,
                    required: true
                }}
                handleOnChange={handleOnChange}
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
                invalid={!isPasswordValid && true}
            />

            <InputField 
                label="Confirm Password" 
                inputFieldAttribute={{
                    type: "password",
                    name: "confirm_password",
                    value: formData.confirm_password,
                    onChange: handleOnChange,
                    required: true
                }}
                invalid={!isPasswordValid && true}
                errorMessage={!isPasswordValid && "Passwords must match"}
            />
            
            <div className="d-grid">
                <Button type="submit" className="btn-dark my-3 px-5 py-2" disabled={!isPasswordValid}>Sign up</Button>
            </div>
        </Form>
    )
}

export default SignupForm;
import { Button, Form } from "react-bootstrap"
import InputField from "./InputField"
import { useState } from "react"
import { createUser } from "../axios/userAxios"

const initialValue = {
    email: "",
    password: "",
    confirm_password: ""
}

const SignupForm = () => {
    const [formData, setFormData] = useState(initialValue);
    const { email, password, confirm_password } = formData;
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const handleOnSubmit = async(e) => {
        e.preventDefault();

        // send api request to create user
        const result = await createUser({
            email,
            password
        })
        // error handling
        // success
    }

    const matchPassword = (first_password, second_password) => {
        if(first_password !== second_password) {
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
        if(name == "password" && confirm_password) matchPassword(confirm_password, value);
        if(name == "confirm_password") matchPassword(password, value)
    }

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
                <Button type="submit" className="btn-dark my-3 px-5 py-2">Sign up</Button>
            </div>
        </Form>
    )
}

export default SignupForm;
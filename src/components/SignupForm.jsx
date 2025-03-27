import { Button, Form } from "react-bootstrap"
import InputField from "./InputField"
import { useState } from "react"

const initialValue = {
    email: "",
    password: "",
    confirm_password: ""
}

const SignupForm = () => {
    const [formData, setFormData] = useState(initialValue);

    const handleOnSubmit = async(e) => {
        e.preventDefault;

        // send api request to create user
        // error handling
        // success
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
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
            />
            
            <div className="d-grid">
                <Button className="btn-dark my-3 px-5 py-2">Sign up</Button>
            </div>
        </Form>
    )
}

export default SignupForm;
import { Button, Form } from "react-bootstrap";
import InputField from "./InputField";
import { useState } from "react";


const initialFormData = {
    email: "",
    password: "",
}
const LoginForm = () => {
    const [formData, setFormData] = useState(initialFormData);

    const handleOnSubmit = () => {
        e.preventDefault();

        // call axios request to login user

        // if success store jwt access token on session and refresh token local storage

        // dispatch an action to get the user data

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
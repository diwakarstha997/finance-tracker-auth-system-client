import { Form } from "react-bootstrap";
import InputField from "./InputField";
import { useState } from "react";


initialFormData = {
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
                label="email"
                inputFieldAttribute={{
                    type: "email",
                    name: "email",
                    value: formData.email,
                    onChange: handleOnChange,
                    required: true
                }}
            />

            <InputField
                label="password"
                inputFieldAttribute={{
                    type: "password",
                    name: "password",
                    value: formData.password,
                    onChange: handleOnChange,
                    required: true
                }}
            />
        </Form>
    )
}

export default LoginForm;
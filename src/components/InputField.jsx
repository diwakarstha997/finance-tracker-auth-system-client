import { Form } from "react-bootstrap"

const InputField = ({label, inputFieldAttribute, invalid=false, errorMessage=""}) => {
    return(
        <Form.Group className="my-3">
            <Form.Label className="fw-bold">
                {label}
            </Form.Label>
        
            <input 
                {...inputFieldAttribute}
                className={`${invalid?"input-field-invalid":"input-field"} px-3`}
            />

            {errorMessage && 
                <p style={{fontSize: "14px"}} className="text-danger fw-bold mt-2">
                    * {errorMessage}
                </p>
            }

        </Form.Group>
    )
}

export default InputField;
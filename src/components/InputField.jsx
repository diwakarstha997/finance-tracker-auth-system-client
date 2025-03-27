import { Form } from "react-bootstrap"

const InputField = ({label, inputFieldAttribute, invalid=false, errorMessage=""}) => {
    return(
        <Form.Group className="my-3">
            <Form.Label className="fw-bold">
                {label}
                {errorMessage && 
                    <span style={{fontSize: "14px"}}className="text-danger ps-4">
                        * {errorMessage}
                    </span>
                }
            </Form.Label>

            <input 
                {...inputFieldAttribute}
                className={`${invalid?"input-field-invalid":"input-field"} px-3`}
            />
        </Form.Group>
    )
}

export default InputField;
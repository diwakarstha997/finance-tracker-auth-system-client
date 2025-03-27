import { Stack } from "react-bootstrap";
import logo from "../assets/logo.png"

const Logo = (props) => {
    const { fontSize } = props;

    return(
        <Stack direction="horizontal" >
            <div className="logo-wrapper">
                <img src={logo} alt="logo" width="100%"/>
            </div>
            <div>
                <h4 style={{fontSize: fontSize}}className="text-color-grenishblue-dark fw-bold align-content-center">
                    FinanceTracker
                </h4>
            </div>
        </Stack>
    )
}

export default Logo;
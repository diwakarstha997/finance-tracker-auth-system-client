import { Button, Container } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { logoutUserAction } from "../../redux/user/userActions";

const UserHomePage = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUserAction());
    }
    return(
        <Container className="d-flex justify-content-center vh-100">
            <div className="align-content-center text-center">
                <p>
                    User Logged In
                </p>
                <Button className="btn-dark rounded-pill" onClick={() => handleLogout()}>Log Out</Button>
            </div>
        </Container>
    )
}

export default UserHomePage;
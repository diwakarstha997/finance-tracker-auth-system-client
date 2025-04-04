import { Container } from "react-bootstrap"
import { Link } from "react-router";

const UserHomePage = () => {
    return(
        <Container className="d-flex justify-content-center vh-100">
            <div className="align-content-center text-center">
                <p>
                    User Logged In
                </p>
                <Link to="/">Log Out</Link>
            </div>
        </Container>
    )
}

export default UserHomePage;
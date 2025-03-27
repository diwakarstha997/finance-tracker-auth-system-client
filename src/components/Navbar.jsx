import { Button, Col, Row, Stack } from "react-bootstrap";
import Logo from "./Logo";
import { Link } from "react-router";
import { IoLogOut } from "react-icons/io5";

const Navbar = (props) => {
    const { user } = props
    return(
        <Row>
            <Col className="d-flex justify-content-start py-2">
                <Link to="/" className="nav-link"><Logo /></Link>
            </Col>
            {!user && 
            <>
                <Col className="d-flex justify-content-center">
                    <Stack direction="horizontal" gap={5}>
                        <div>Home</div>
                        <div>About Us</div>
                        <div>Contact</div>
                    </Stack>
                </Col>
                <Col className="d-flex justify-content-end">
                    <Stack direction="horizontal" gap={5}>
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                        <Button className="btn-dark rounded-pill px-4">
                            <Link to="/register" className="nav-link">Get Started</Link>
                        </Button>
                    </Stack>
                </Col>
            </>
            }
            {user && 
            <>
                <Col className="d-flex justify-content-end">
                    <Button className="btn-dark rounded-0 px-4">
                        <Link to="/" className="nav-link"><IoLogOut className="heading-5"/> Log off</Link>
                    </Button>
                </Col>
            </>
            }
        </Row>
    )
}

export default Navbar;
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SignupForm from "../../components/SignupForm";
import { Link } from "react-router";

const SignupPage = () => {
    return(
        <Container>
            <Navbar />
            <Row className='mx-5 my-5'>
              <Col className='align-content-center image-box mx-5'>
                  <div className='image-box border border-dark'>
                    <img src="https://lntedutech.com/wp-content/uploads/2024/04/Personal-Finance-Management-scaled-1.jpg" alt="dashboard-img" width="100%"/>
                  </div>
              </Col>
              <Col className='bg-color-grenishblue-light border border-dark border-1  px-5 py-5'>
                <Container className="py-4">
                    <div className="heading-5 fw-bold">
                        <span className="text-color-grenishblue-dark">Get Started</span> with FinanceTracker

                    </div>
                    <div className="my-2" >
                        Welcome to FinanceTracker - Let's create your account
                    </div>
                    <hr/>
                    <SignupForm />
                    <div className="text-center my-2" >
                        Already have an account <Link to="/login" className="text-color-grenishblue-dark">Login</Link>
                    </div>
                </Container>
              </Col>
            </Row>
            <Footer />
        </Container>
    )
}

export default SignupPage;
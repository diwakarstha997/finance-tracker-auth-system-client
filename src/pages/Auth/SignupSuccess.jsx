import { Container } from "react-bootstrap";
import Navbar from "../../components/molecules/Navbar";
import Footer from "../../components/molecules/Footer";
import { useLocation } from "react-router";

const SignupSuccess = () => {
    const location = useLocation();

    return(
        <Container>
            <Navbar />
            <Container className="d-flex justify-content-center my-5 py-5">
                <div className="align-content-center text-center py-5">
                    <div className="border border-success border-2 rounded-3 px-5 py-5 bg-success bg-opacity-25 text-success fw-bold">
                        <p>Thank you for joining FinanceTracker.</p>
                        <p>Please check your email: {location.state.email} for verification.</p>
                    </div>
                </div>
            </Container>
            <Footer />
        </Container>
    )
}

export default SignupSuccess;
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useSearchParams } from "react-router";
import { verifyUserEmail } from "../../axios/userAxios";
import Navbar from "../../components/molecules/Navbar";
import Footer from "../../components/molecules/Footer";

const VerifyEmailPage = () => {
    const [isEmailVerified, setIsEmailVerified] = useState(false);

    // Extract verification info from URL
    const [params] = useSearchParams();

    const userEmail = params.get('email');
    const token = params.get('token');

    // Send API request for verifying user
    const verifyEmail = async () => {
        // axios api request to verify user email 
        const responseData = await verifyUserEmail(userEmail, token);

        // if email verification failed
        if(responseData.status == "error"){
            setIsEmailVerified(false);
            return;
        }

        // if email verification success
        setIsEmailVerified(true);
    }

    useEffect(() => {
        if(userEmail && token){
            verifyEmail();
        }
    },[userEmail, token])


    return(
        <Container>
        <Navbar />

        {/* if email verification failed */}
        {!isEmailVerified && 
            <Container className="d-flex justify-content-center my-5 py-5">
                <div className="align-content-center text-center py-5">
                    <div className="border border-danger border-2 rounded-3 px-5 py-5 bg-danger bg-opacity-25 text-danger fw-bold">
                        <p>Email could not verified.</p>
                        <p>
                            Please make sure the link is valid
                        </p>
                    </div>
                </div>
            </Container>
        }

        {/* if email verification success */}
        {isEmailVerified && 
            <Container className="d-flex justify-content-center my-5 py-5">
                <div className="align-content-center text-center py-5">
                    <div className="border border-success border-2 rounded-3 px-5 py-5 bg-success bg-opacity-25 text-success fw-bold">
                        <p>Email Successfully Verified.</p>
                        <p>
                            Please login: 
                            <Link to="/login" className="px-2 text-dark">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </Container>
        }
        <Footer />
    </Container>
    )
}

export default VerifyEmailPage;
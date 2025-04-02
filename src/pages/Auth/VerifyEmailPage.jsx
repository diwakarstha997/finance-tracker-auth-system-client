import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useSearchParams } from "react-router";

const VerifyEmailPage = () => {
    const [isEmailVerified, setIsEmailVerified] = useState(false);

    // Extract verification info from URL
    const [params] = useSearchParams();

    const userEmail = params.get('email');
    const token = params.get('token');

    // Send API request for verifying user
    const verifyUserEmail = async () => {
        // axios api request to verify user email 

        // if email verification failed

        // if email verification success
    }

    useEffect(() => {
        if(userEmail && token){
            verifyUserEmail();
        }
    },[userEmail, token])


    return(
        <Container>
        <Navbar />

        {/* if email verification failed */}
        {!!isEmailVerified && 
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
                            <Link to="/login" className="nav-link">
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
import { Col, Row, Stack } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";
import SocialIcon from "./SocialIcon";

const Footer = () => {
    return(
        <>
            <Row className="py-4 my-4">
                <Col>
                    <Stack gap={3}>
                        <div>
                           <Logo fontSize="32px"/>
                        </div>

                        <div className="heading-6 text-wrap-width-1">
                            Welcome to FinanceTracker, tracking your finance was never easy.
                        </div>

                        <Stack direction="horizontal" gap={3}>
                            <SocialIcon icon={<FaFacebookF />} />
                            <SocialIcon icon={<FaTwitter />} />
                            <SocialIcon icon={<FaInstagram />} />
                            <SocialIcon icon={<FaLinkedin />} />
                        </Stack>
                    </Stack>
                </Col>
                <Col className="align-content-center">
                    <Stack gap={3}>
                        <h4>Company</h4>
                        <Stack gap={2}>
                            <div>Home</div>
                            <div>About Us</div>
                            <div>Contact</div>
                        </Stack>
                    </Stack>
                </Col>
            </Row>
            <div className="footer-copyright-text mb-4">
                &copy; Copyright All Reserved. Build by Diwakar Shrestha, inspired from Design of <a href="https://www.behance.net/gallery/213718149/Finance-Tracker-Landing-Page?tracking_source=search_projects|finance+tracker" target="_blank">Fahema Yesmin</a> from <a href="https://www.behance.net/gallery/213718149/Finance-Tracker-Landing-Page?tracking_source=search_projects|finance+tracker" target="_blank">www.behance.net</a>.
            </div>
        </>
    )
}

export default Footer;
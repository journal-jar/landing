import React from "react";
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import styled from "styled-components";
import Colors from "../../utils/Colors";
import { useNavigate } from "react-router-dom";

const FooterWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const PrivacyLink = styled.a`
    color: ${Colors.WHITE};
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: ${Colors.PURPLE};
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px 8px;
    border-radius: 12px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const Icon = styled.div`
    padding: 8px;
    font-size: 20px;
    color: ${Colors.WHITE};

    &:hover {
        color: ${Colors.PURPLE};
    }
`;


const Footer = () => {
    const navigate = useNavigate();
    
    const handlePrivacy = () => {
        navigate("/privacy");
    }

    return (
        <FooterWrapper>
            <PrivacyLink onClick={handlePrivacy} >Privacy Policy</PrivacyLink>
            <Container>
                <a href="https://www.linkedin.com/company/thejournalinghabit/">
                    <Icon as={FaLinkedin} />
                </a>
                {/* <a href="https://www.facebook.com/journal365ai">
                    <Icon as={FaFacebook} />
                </a>
                <a href="https://www.youtube.com">
                    <Icon as={FaYoutube} />
                </a>
                <a href="https://www.instagram.com/journal365ai/">
                    <Icon as={FaInstagram} />
                </a>
                <a href="https://twitter.com/Journal365ai">
                    <Icon as={BsTwitterX} />
                </a> */}
            </Container>
        </FooterWrapper>
    );
};

export default Footer;

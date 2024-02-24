import React from "react";
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import styled from "styled-components";
import Colors from "../../utils/Colors";

const FooterWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
`;

const PrivacyLink = styled.a`
    color: ${Colors.WHITE};
    text-decoration: none;

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
    return (
        <FooterWrapper>
            <PrivacyLink href="/privacy">Privacy Policy</PrivacyLink>
            <Container>
                <a href="https://www.linkedin.com/company/journal365/">
                    <Icon as={FaLinkedin} />
                </a>
                <a href="https://www.facebook.com/journal365ai">
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
                </a>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;

import React from 'react';
import phoneImage from '../../assets/phone.png'
import Footer from './Footer';
import styled from 'styled-components';
import Colors from '../../utils/Colors';
import AnimatedSubtitle from './AnimatedSubtitle';

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: transparent; // Default background color
  border: 1px solid ${Colors.LIGHT_GRAY};
  color: ${Colors.WHITE};
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease; // Smooth transition for the background color

  &:hover {
    background-color: ${Colors.PURPLE};
  }
`;

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: 'center', padding: '20px 10%', backgroundColor: Colors.BLACK }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: Colors.WHITE }}>Journal365</h1>
      <p style={{ fontSize: '1.5rem', color: Colors.WHITE }}>
          Take the Journal365 Challenge!
          <br />
          Finally Unlock the Foundational Habit of Journaling
      </p>
      <AnimatedSubtitle/>
      <img 
        src={phoneImage}
        alt="Phone with Journal365 app"
        style={{ width: '600px', height: 'auto',}}
      />
      <p style={{ fontSize: '1.25rem', marginBottom: '20px', color: Colors.WHITE }}>
        Official Launch for IOS on April 1st 2024 🎉
      </p>
      <p style={{ fontSize: '1.25rem', marginBottom: '20px', color: Colors.WHITE }}>
        </p>
        <a href="https://testflight.apple.com/join/crr4Eu99" target="_blank" style={{ textDecoration: 'none' }}>
          <StyledButton>
            In the meantime, try the beta
          </StyledButton>
        </a>
        <Footer />
      </div>

  );
};

export default Home;

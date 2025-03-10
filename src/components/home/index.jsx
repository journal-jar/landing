import React from "react";
import phoneImage from "../../assets/phone.png";
import Footer from "./Footer";
import styled from "styled-components";
import Colors from "../../utils/Colors";
import AnimatedSubtitle from "./AnimatedSubtitle";

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: transparent; // Default background color
  border: 1px solid ${Colors.LIGHT_GRAY};
  color: ${Colors.WHITE};
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease; // Smooth transition for the background color
  border-radius: 6px;
  font-weight: bold;

  &:hover {
    background-color: ${Colors.PURPLE};
  }
`;

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px 10%",
        backgroundColor: Colors.BLACK,
      }}
    >
      <h1
        style={{ fontSize: "3rem", marginBottom: "20px", color: Colors.WHITE }}
      >
        The Journaling Habit
      </h1>
      <p style={{ fontSize: "1.5rem", color: Colors.WHITE }}>
        Take the Year of Journaling Challenge!
        <br />
        Finally Unlock the Foundational Habit of Journaling
      </p>
      <AnimatedSubtitle />
      <img
        src={phoneImage}
        alt="Phone with The Journaling Habit app"
        style={{ width: "600px", height: "auto" }}
      />

      <p
        style={{
          fontSize: "1.25rem",
          marginBottom: "20px",
          color: Colors.WHITE,
        }}
      ></p>
      <a
        href="https://apps.apple.com/us/app/journal365ai/id6474921179"
        target="_blank"
        style={{ textDecoration: "none" }}
        rel="noreferrer"
      >
        <StyledButton>Available for download on iPhone 🎉</StyledButton>
      </a>
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import Colors from "../../utils/Colors";

const Support = () => {
  const darkModeStyles = {
    container: {
      backgroundColor: Colors.BLACK,
      color: Colors.WHITE,
      padding: "20px 10%",
      borderRadius: "12px",
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    },
    header: {
      color: Colors.WHITE,
      textAlign: "left",
      marginBottom: "20px",
    },
    title: {
      fontSize: "50px",
      fontWeight: "bold",
      marginBottom: 0,
    },
    subTitle: {
      padding: "10px",
      fontSize: "18px",
      fontWeight: "normal",
      textAlign: "left",
    },
    content: {
      color: Colors.WHITE,
      backgroundColor: Colors.DARK_GRAY,
      padding: "15px",
      borderRadius: "8px",
      margin: "10px 0px",
    },
    sectionTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      marginTop: "10px",
    },
    paragraph: {
      fontSize: "16px",
      lineHeight: "1.5",
      marginBottom: "10px",
    },
  };

  return (
    <div style={darkModeStyles.container}>
      <header style={darkModeStyles.header}>
        <p style={darkModeStyles.title}>Support</p>
        <p style={darkModeStyles.subTitle}>
          We're here to help. If you have questions or need assistance, feel
          free to reach out.
        </p>
      </header>
      <div style={darkModeStyles.content}>
        <p style={darkModeStyles.sectionTitle}>Contact Us</p>
        <p style={darkModeStyles.paragraph}>
          For support inquiries, please email us at:
        </p>
        <p style={darkModeStyles.paragraph}>
          <a
            href="mailto:contact@journal365.ai"
            style={{ color: Colors.LIGHT_BLUE }}
          >
            contact@journal365.ai
          </a>
        </p>
        <p style={darkModeStyles.sectionTitle}>Feedback</p>
        <p style={darkModeStyles.paragraph}>
          Your feedback is valuable to us. Please let us know how we can improve
          your experience with Journal365.
        </p>
      </div>
    </div>
  );
};

export default Support;

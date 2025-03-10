import React from "react";
import headshotImage from "../../assets/headshot_square.jpg";
import Colors from "../../utils/Colors";

const Privacy = () => {
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
      textAlign: "Left",
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
    date: {
      textAlign: "left",
      fontSize: "14px",
      color: Colors.WHITE,
    },
    nametag: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  };

  return (
    <div style={darkModeStyles.container}>
      <header style={darkModeStyles.header}>
        <p style={darkModeStyles.title}>Our Commitment to Your Privacy</p>
        <div style={darkModeStyles.nametag}>
          <img
            src={headshotImage}
            alt="Will Cline - Lead Engineer"
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ height: "45px" }}></div>
            <p style={darkModeStyles.subTitle}>
              Will Cline
              <br />
              Lead Engineer
              <br />
              <p style={darkModeStyles.date}>24 Dec 2023</p>
            </p>
          </div>
        </div>
      </header>
      <div style={darkModeStyles.content}>
        <p style={darkModeStyles.paragraph}>
          <em>"Trust and privacy are at the core of our mission at The Journaling
          Habit. We're committed to privacy and security for The Journaling
          Habit users."</em>
        </p>

        <p style={darkModeStyles.sectionTitle}>Data Collection and Use</p>
        <p style={darkModeStyles.paragraph}>
          The Journaling Habit collects certain types of data to enhance your
          experience. This includes:
        </p>
        <ul style={darkModeStyles.paragraph}>
          <li>
            <strong>Contact Information:</strong> Name and email address, used
            for account creation and communication purposes.
          </li>
          <li>
            <strong>User Content:</strong> Journal entries, photos, and audio
            recordings that you choose to upload. This content is stored
            securely and is private to you.
          </li>
          <li>
            <strong>Identifiers:</strong> A unique User ID is generated for
            account management purposes.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you interact with
            the app, including session duration and feature usage. This data
            helps us improve your experience.
          </li>
          <li>
            <strong>Diagnostics:</strong> Crash and performance data is
            collected to identify and resolve technical issues quickly.
          </li>
        </ul>

        <p style={darkModeStyles.sectionTitle}>Purpose of Data Collection</p>
        <ul style={darkModeStyles.paragraph}>
          <li>
            <strong>Account Management:</strong> Contact Information and User ID are used to
            create, manage, and support user accounts.
          </li>
          <li>
            <strong>Core Functionality:</strong> Journal entries and media files are essential
            for the journaling experience.
          </li>
          <li>
            <strong>Analytics:</strong> Usage Data helps us understand app engagement and
            improve functionality.
          </li>
          <li>
            <strong>Diagnostics:</strong> Crash and performance data are used to maintain a
            stable and reliable app experience.
          </li>
        </ul>

        <p style={darkModeStyles.sectionTitle}>
          Data Sharing and Third-Party Services
        </p>
        <p style={darkModeStyles.paragraph}>
          We share data with third-party providers only when necessary and in a
          secure manner:
        </p>
        <ul style={darkModeStyles.paragraph}>
          <li>
            <strong>Firebase:</strong> Used for authentication, database, and
            storage. Firebase data is encrypted both in transit and at rest.
          </li>
          <li>
            <strong>OpenAI:</strong> Some data may be processed by OpenAI for
            AI-based features. All data sent to OpenAI is encrypted in transit
            and processed securely.
          </li>
          <li>
            <strong>Analytics Providers:</strong> Usage data may be shared with
            analytics services to help us understand app performance. No
            personally identifiable information is shared.
          </li>
        </ul>

        <p style={darkModeStyles.sectionTitle}>Data Security</p>
        <p style={darkModeStyles.paragraph}>
          Your data is secured through encryption both in transit and at rest.
          We use industry-standard practices and providers to protect your
          information, ensuring it remains private and secure.
        </p>

        <p style={darkModeStyles.sectionTitle}>User Rights and Data Deletion</p>
        <p style={darkModeStyles.paragraph}>
          You have the right to access, update, or delete your personal data. To
          request data deletion, contact us at <a
            href="mailto:support@TheJournalingHabit.com"
            style={{ color: Colors.LIGHT_BLUE }}
          >
            support@TheJournalingHabit.com
          </a>.
          We will securely and permanently delete your data from our systems
          upon request.
        </p>

        <p style={darkModeStyles.sectionTitle}>Optional Data Collection</p>
        <p style={darkModeStyles.paragraph}>
          Occasionally, we may collect additional data through optional feedback
          forms or support requests. This data is collected only with your
          consent and is not part of the app’s primary functionality. Any
          optional data is handled securely and is only used to improve our
          service.
        </p>
      </div>
    </div>
  );
};

export default Privacy;

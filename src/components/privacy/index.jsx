import React from 'react';
import headshotImage from '../../assets/headshot_square.jpg';
import Colors from '../../utils/Colors';

const Privacy = () => {
    const darkModeStyles = {
        container: {
            backgroundColor: Colors.BLACK,
            color: Colors.WHITE,
            padding: '20px 10%',
            borderRadius: '12px',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
        },
        header: {
            color: Colors.WHITE,
            textAlign: 'Left',
            marginBottom: '20px'
        },
        title: {
            fontSize: '50px',
            fontWeight: 'bold',
            marginBottom: 0,
        },
        subTitle: {
            padding: '10px',
            fontSize: '18px',
            fontWeight: 'normal',
            textAlign: 'left',
        },
        content: {
            color: Colors.WHITE,
            backgroundColor: Colors.DARK_GRAY,
            padding: '15px',
            borderRadius: '8px',
            margin: '10px 0px'
        },
        sectionTitle: {
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '10px'
        },
        paragraph: {
            fontSize: '16px',
            lineHeight: '1.5',
            marginBottom: '10px'
        },
        date: {
            textAlign: 'left',
            fontSize: '14px',
            color: Colors.WHITE
        },
        nametag : {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        }
    };

    return (
        <div style={darkModeStyles.container}>
            <header style={darkModeStyles.header}>
                <p style={darkModeStyles.title}>Our Commitment to your Privacy</p>
         
                <div style={darkModeStyles.nametag}>
                    <img 
                        src={headshotImage}
                        alt="Will Cline - Head of Engineering"
                        style={{ width: '100px', borderRadius: '50%' }}
                    />
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div style={{height: "45px",}}></div>
                        <p style={darkModeStyles.subTitle}>
                            Will Cline<br />Head of Engineering<br /> 
                            <p style={darkModeStyles.date}>24 Dec 2023</p>
                        </p>
                    </div>
                </div>
            </header>
            <div style={darkModeStyles.content}>
                <p style={darkModeStyles.paragraph}>
                    "Trust and privacy are at the core of our mission at Journal365.
                    We're committed to privacy and security for Journal365 users."
                </p>
                <p style={darkModeStyles.sectionTitle}>Data Collection and Use</p>
                <p style={darkModeStyles.paragraph}>
                    Our application collects data directly on the client-side using React
                    Native for iOS, ensuring a secure initial handling of your data.
                </p>
                <p style={darkModeStyles.sectionTitle}>Data Encryption and Storage</p>
                <p style={darkModeStyles.paragraph}>
                    All data sent to Firebase is encrypted in transit, and our utilization of
                    Cloud Firestore, Authentication, and Cloud Functions ensures that your
                    information is also encrypted while at rest, safeguarding your information
                    at every step.
                </p>
                <p style={darkModeStyles.sectionTitle}>AI Functionality and Data Handling</p>
                <p style={darkModeStyles.paragraph}>
                    For features that require AI functionality, we securely transmit data to
                    OpenAI's API, which adheres to strict encryption protocols both during
                    transit (using TLS 1.2 or higher) and at rest (using AES-256).
                </p>
                <p style={darkModeStyles.sectionTitle}>Data Deletion Request</p>
                <p style={darkModeStyles.paragraph}>
                    We honor your right to manage your personal data. If you request the
                    deletion of your information, contact us and we'll handle it promptly,
                    ensuring your data is completely and securely removed from our systems.
                </p>
            </div>
        </div>
    );
};

export default Privacy;

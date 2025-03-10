import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Colors from "../../utils/Colors";

const fadeInUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeOutUp = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(-20px);
    opacity: 0;
  }
`;

const Word = styled.p`
  animation: ${fadeInUp} 0.5s ease-out forwards, ${fadeOutUp} 0.5s ease-out forwards;
  animation-delay: 0s, 2.5s; // Stay visible for 2.5 seconds before fading out
//   position: absolute;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
  color: ${Colors.BLUE};
`;

const AnimatedSubtitle = () => {
    const toggleWords = ['Journaling', 'Growth', 'Transformation'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % toggleWords.length);
        }, 3000); // Cycle every 3 seconds
        return () => clearInterval(timer);
    }, [toggleWords.length]);

    return (
        <div style={styles.container}>
            <p style={{ color: Colors.WHITE, fontSize: '1.5rem' }}>
                A year of
            </p>
            <div >
                <Word key={index}>
                    &nbsp;{toggleWords[index]}
                </Word>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'start',
        position: 'relative', // Necessary for absolute positioning of Word
    },
}

export default AnimatedSubtitle;

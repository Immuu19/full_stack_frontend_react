import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styled from "styled-components";
import Button from "../components/Button";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

function ShareAchievements() {
  const [achievementText, setAchievementText] = useState('');

  const handleShare = () => {
    // share logic 
  };

  const handleShareOnSocialMedia = (platform) => {
    // Handle sharing on the selected social media platform
    console.log(`Sharing on ${platform}`);
  };

  return (
    <Container>
    <Wrapper>
    <div>
      <Title>Share Achievements</Title>
      <textarea
        rows="10"
        cols="190"
        placeholder="Enter your achievement here"
        value={achievementText}
        onChange={(e) => setAchievementText(e.target.value)}
      />
      <br />
      <Button 
      text="Share"
      small
      onClick={handleShare}
       />
      
      {/* Social media icons */}
      <div>
        <FontAwesomeIcon icon={faTwitter} size="2x" onClick={() => handleShareOnSocialMedia('Twitter')} />
        <FontAwesomeIcon icon={faFacebook} size="2x" onClick={() => handleShareOnSocialMedia('Facebook')} />
        <FontAwesomeIcon icon={faInstagram} size="2x" onClick={() => handleShareOnSocialMedia('Instagram')} />
      </div>
    </div>
    </Wrapper>
    </Container>
  );
}

export default ShareAchievements;

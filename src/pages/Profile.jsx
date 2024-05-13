import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { getProfile } from "../api";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FlashCard = styled.div`
  width: 300px;
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const ProfileInfo = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getProfile({
          });
        
        console.log("response")
        console.log(response)
        setProfileData(response);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <Container>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <FlashCard>
          <h2>{profileData.data.data.firstName} {profileData.data.data.lastName}</h2>
          <p>Email: {profileData.data.data.email}</p>
          <p>Sex: {profileData.data.data.sex}</p>
          <p>Height: {profileData.data.data.height}</p>
          <p>Weight: {profileData.data.data.weight}</p>
        </FlashCard>
      )}
    </Container>
  );
};

export default ProfileInfo;

import React, { useState, useEffect } from 'react';
import styled from "styled-components";

// Mock API data for wearable devices
const mockWearableData = [
  { id: 1, device: 'Fitbit', steps: 5000, caloriesBurned: 250 },
  { id: 2, device: 'Apple Watch', steps: 7000, caloriesBurned: 300 },
  { id: 3, device: 'Garmin', steps: 6000, caloriesBurned: 280 },
];

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
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const FlashCard = styled.div`
  background-color: ${({ theme }) => theme.card_background};
  color: ${({ theme }) => theme.card_text};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const WearableDevicesIntegration = () => {
  // State for storing wearable device data
  const [wearableData, setWearableData] = useState([]);

  // Fetch wearable device data from the mock API
  useEffect(() => {
    // Simulate API call delay with setTimeout
    const fetchData = () => {
      setTimeout(() => {
        setWearableData(mockWearableData);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Wearable Devices Integration</Title>
        <Section>
          <h3>Wearable Device Data:</h3>
          <CardWrapper>
            {wearableData.map(device => (
              <FlashCard key={device.id}>
                <h4>{device.device}</h4>
                <p>Steps: {device.steps}</p>
                <p>Calories Burned: {device.caloriesBurned}</p>
              </FlashCard>
            ))}
          </CardWrapper>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default WearableDevicesIntegration;

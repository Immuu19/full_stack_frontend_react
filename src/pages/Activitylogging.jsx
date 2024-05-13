import React, { useState } from 'react';
import styled from "styled-components";

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

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.button_background};
  color: ${({ theme }) => theme.button_text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const LoggedActivity = styled.div`
  margin-top: 20px;
`;

const FlashCard = styled.div`
  background-color: ${({ theme }) => theme.card_background};
  color: ${({ theme }) => theme.card_text};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin-bottom: 20px;
`;

const options = ['Cycling', 'Workout', 'Swimming'];
const intensityOptions = ['Select Intensity', 'High', 'Medium', 'Low'];

const ActivityLogger = () => {
  const [activity, setActivity] = useState({
    type: '',
    duration: '',
    distance: '',
    intensity: '',
    caloriesBurned: ''
  });

  const [loggedActivities, setLoggedActivities] = useState([]);

  const handleDragStart = (e, option) => {
    e.dataTransfer.setData("option", option);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const option = e.dataTransfer.getData("option");
    setActivity(prevActivity => ({
      ...prevActivity,
      type: option
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivity(prevActivity => ({
      ...prevActivity,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = { ...activity };
    setLoggedActivities(prevActivities => [...prevActivities, newActivity]);
    setActivity({
      type: '',
      duration: '',
      distance: '',
      intensity: '',
      caloriesBurned: ''
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Activity Logging</Title>
        <form onSubmit={handleSubmit}>
          <FlexWrap>
            <label onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
              Type of Activity:
              <select
                name="type"
                value={activity.type}
                onChange={handleChange}
                onDragStart={(e) => handleDragStart(e, 'Cycling')}
                draggable
              >
                {options.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              Duration (in minutes):
              <Input
                type="number"
                name="duration"
                value={activity.duration}
                onChange={handleChange}
              />
            </label>
            <label>
              Intensity:
              <Select
                name="intensity"
                value={activity.intensity}
                onChange={handleChange}
              >
                {intensityOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </Select>
            </label>
            <label>
              Calories Burned:
              <Input
                type="number"
                name="caloriesBurned"
                value={activity.caloriesBurned}
                onChange={handleChange}
              />
            </label>
            <Button type="submit">Log Activity</Button>
          </FlexWrap>
        </form>
        <LoggedActivity>
          <h2>Logged Activities</h2>
          {loggedActivities.map((activity, index) => (
            <FlashCard key={index}>
              <p>Type: {activity.type}</p>
              <p>Duration: {activity.duration}</p>
              <p>Intensity: {activity.intensity}</p>
              <p>Calories Burned: {activity.caloriesBurned}</p>
            </FlashCard>
          ))}
        </LoggedActivity>
      </Wrapper>
    </Container>
  );
};

export default ActivityLogger;

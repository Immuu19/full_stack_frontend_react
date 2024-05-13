import { useState } from 'react';
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

const GoalSetting = () => {
  // State for storing user's goal
  const [goal, setGoal] = useState('');
  // State for storing user's input data
  const [userData, setUserData] = useState({
    currentWeight: '',
    targetWeight: '',
    timeframe: '',
    preferredActivity: '',
    currentPerformance: '',
    improvementTarget: '',
    muscleGroups: '',
    experienceLevel: '',
    equipmentAccess: '',
    specificActivity: ''
  });

  // Function to handle goal selection
  const handleGoalSelection = (selectedGoal) => {
    setGoal(selectedGoal);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions with the selected goal and user input data
    console.log('Selected Goal:', goal);
    console.log('User Data:', userData);
  };

  // Function to update user input data based on field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <Container>
      <Wrapper>
        <Title>Goal Setting</Title>
        <form onSubmit={handleSubmit}>
          <FlexWrap>
            <label>
              Select Your Fitness Goal:
              <select value={goal} onChange={(e) => handleGoalSelection(e.target.value)}>
                <option value="">Select Goal</option>
                <option value="weight_loss">Weight Loss</option>
                <option value="endurance_improvement">Endurance Improvement</option>
                <option value="muscle_gain">Muscle Gain</option>
                <option value="performance_targets">Performance Targets</option>
              </select>
            </label>
            {goal && (
              <div>
                <h3>User Input:</h3>
                {goal === 'weight_loss' && (
                  <div>
                    <label>
                      Current Weight:
                      <input
                        type="number"
                        name="currentWeight"
                        value={userData.currentWeight}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Target Weight or Desired Weight Loss Amount:
                      <input
                        type="number"
                        name="targetWeight"
                        value={userData.targetWeight}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Preferred Timeframe (weeks or months):
                      <input
                        type="text"
                        name="timeframe"
                        value={userData.timeframe}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                )}
                {goal === 'endurance_improvement' && (
                  <div>
                    <label>
                      Preferred Activity (running, cycling, swimming):
                      <input
                        type="text"
                        name="preferredActivity"
                        value={userData.preferredActivity}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Current Performance Level (distance or time for a standard route):
                      <input
                        type="text"
                        name="currentPerformance"
                        value={userData.currentPerformance}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Desired Improvement Target (increase distance by 10% or improve pace):
                      <input
                        type="text"
                        name="improvementTarget"
                        value={userData.improvementTarget}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                )}
                {goal === 'muscle_gain' && (
                  <div>
                    <label>
                      Muscle Groups to Focus On (e.g., arms, legs, core):
                      <input
                        type="text"
                        name="muscleGroups"
                        value={userData.muscleGroups}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Experience Level (beginner, intermediate, advanced):
                      <input
                        type="text"
                        name="experienceLevel"
                        value={userData.experienceLevel}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Equipment Access (gym, home):
                      <input
                        type="text"
                        name="equipmentAccess"
                        value={userData.equipmentAccess}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                )}
                {goal === 'performance_targets' && (
                  <div>
                    <label>
                      Specific Activity and Goal (e.g., lift a certain weight, run a specific distance in a set time):
                      <input
                        type="text"
                        name="specificActivity"
                        value={userData.specificActivity}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                )}
                <button type="submit">Set Goal</button>
              </div>
            )}
          </FlexWrap>
        </form>
        {goal && (
          <Section>
            <h3>User Selection:</h3>
            <CardWrapper>
              <FlashCard>
                <h4>Goal Categories:</h4>
                <p>{goal}</p>
              </FlashCard>
              {Object.entries(userData).map(([key, value]) => (
                <FlashCard key={key}>
                  <h4>{key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })}:</h4>
                  <p>{value}</p>
                </FlashCard>
              ))}
            </CardWrapper>
          </Section>
        )}
      </Wrapper>
    </Container>
  );
};

export default GoalSetting;

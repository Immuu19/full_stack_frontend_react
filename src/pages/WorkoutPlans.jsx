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

function WorkoutPlans() {
  // Mock data for pre-designed workout plans
  const [preDesignedPlans] = useState([
    { id: 1, name: 'Beginner Full Body Workout', description: 'A beginner-friendly full body workout plan. ', duration: ' 30 minutes ' },
    { id: 2, name: 'Intermediate Upper Body Workout', description: 'An intermediate level upper body workout plan. ', duration: ' 45 minutes ' },
    { id: 3, name: 'Advanced HIIT Workout', description: 'An advanced high-intensity interval training workout plan. ', duration: ' 60 minutes ' }
  ]);

  // State for custom workout routine
  const [customWorkoutRoutine, setCustomWorkoutRoutine] = useState([]);

  // Function to add a workout to custom routine
  const addWorkoutToCustomRoutine = (workout) => {
    setCustomWorkoutRoutine([...customWorkoutRoutine, workout]);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Workout Plans</Title>
        <Section>
          {/* Display pre-designed workout plans */}
          <div>
            <h3>Pre-designed Workout Plans</h3>
            <CardWrapper>
              {preDesignedPlans.map(plan => (
                <div key={plan.id}>
                  <strong>{plan.name}</strong> - {plan.description} ({plan.duration})
                  <button onClick={() => addWorkoutToCustomRoutine(plan)}>Add to Custom Routine</button>
                </div>
              ))}
            </CardWrapper>
          </div>

          {/* Display custom workout routine */}
          <div>
            <h3>Custom Workout Routine</h3>
            <CardWrapper>
              {customWorkoutRoutine.map((workout, index) => (
                <div key={index}>
                  <strong>{workout.name}</strong> - {workout.description} ({workout.duration})
                </div>
              ))}
            </CardWrapper>
          </div>
        </Section>
      </Wrapper>
    </Container>
  );
}

export default WorkoutPlans;

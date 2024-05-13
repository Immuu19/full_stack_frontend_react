import React from "react";
import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn"
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Share from "./pages/Share";
import WorkoutPlans from "./pages/WorkoutPlans";
import ActivityLogger from "./pages/Activitylogging";
import GoalSetting from "./pages/GoalSetting";
import Devices from "./pages/Devices"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
      <Container>
            <Navbar currentUser={currentUser} />
          <Routes>
            <Route path="/" element={<Authentication />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/activitylogging" exact element={<ActivityLogger />} />
            <Route path="/goalsetting" exact element={<GoalSetting />} />
            <Route path="/devices" exact element={<Devices />} />
            <Route path="/workouts" exact element={<Workouts />} />
            <Route path="/workoutplans" exact element={<WorkoutPlans />} />
            <Route path="/share" exact element={<Share />} />
            
          </Routes>
          </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

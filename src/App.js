import React, { useState, useEffect } from "react";
import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Share from "./pages/Share";
import WorkoutPlans from "./pages/WorkoutPlans";
import ActivityLogger from "./pages/Activitylogging";
import GoalSetting from "./pages/GoalSetting";
import Devices from "./pages/Devices";
import Profile from "./pages/Profile";
import ProfileInfo from "./pages/Profile";

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
  const [authenticated, setAuthenticated] = useState(false);

  // Check if the user is authenticated
  useEffect(() => {
    if (currentUser) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [currentUser]);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          <Navbar currentUser={currentUser} />
          <Routes>
            <Route
              path="/"
              element={
                authenticated ? <Navigate to="/dashboard" /> : <Authentication />
              }
            />
            <Route path="/profile" element={<ProfileInfo />} />
            <Route path="/activitylogging" element={<ActivityLogger />} />
            <Route path="/goalsetting" element={<GoalSetting />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/workoutplans" element={<WorkoutPlans />} />
            <Route path="/share" element={<Share />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

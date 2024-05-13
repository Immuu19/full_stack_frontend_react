import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import { UserSignUp } from "../api";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/reducers/userSlice";

const ScrollableContainer = styled.div`
  max-height: 500px; /* Set a maximum height for the container */
  overflow: auto; /* Enable scrolling */
`;

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;

const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

const SignUp = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const validateInputs = () => {
    if (!email || !password || !firstname || !lastname || !selectedOption || !height || !weight) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    setLoading(true);
    setButtonDisabled(true);
    if (validateInputs()) {
      try {
        const response = await UserSignUp({ "email" : email, "password" : password, "firstName" : firstname, "lastName" : lastname, "sex" : selectedOption, "height" : height, "weight" : weight });
        dispatch(loginSuccess(response.data));
        alert("Account Created Successfully");
      } catch (err) {
        setError(err.response.data.message || "An error occurred");
      } finally {
        setLoading(false);
        setButtonDisabled(false);
      }
    } else {
      setLoading(false);
      setButtonDisabled(false);
    }
  };

  return (
    <ScrollableContainer>
      <Container>
        <div>
          <Title>Create New Account 👋</Title>
          <Span>Please enter details to create a new account</Span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexDirection: "column",
          }}
        >
          <TextInput
            label="Email Address"
            placeholder="Enter your email address"
            value={email}
            handelChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            label="Password"
            placeholder="Enter your password"
            password
            value={password}
            handelChange={(e) => setPassword(e.target.value)}
          />
          <TextInput
            label="First name"
            placeholder="Enter your first name"
            value={firstname}
            handelChange={(e) => setFirstName(e.target.value)}
          />
          <TextInput
            label="Last name"
            placeholder="Enter your full name"
            value={lastname}
            handelChange={(e) => setLastName(e.target.value)}
          />
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={selectedOption === 'male'}
              onChange={handleOptionChange}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div >
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={selectedOption === 'female'}
              onChange={handleOptionChange}
              style={{ display: 'inline-block' }}
            />
            <label htmlFor="female" >Female</label>
          </div>
          <TextInput
            label="Height"
            placeholder="Enter your height in cm"
            height
            value={height}
            handelChange={(e) => setHeight(e.target.value)}
          />
          <TextInput
            label="Weight"
            placeholder="Enter your weight in Kg"
            weight
            value={weight}
            handelChange={(e) => setWeight(e.target.value)}
          />
          <Button
            text="SignUp"
            onClick={handleSignUp}
            isLoading={loading}
            isDisabled={buttonDisabled}
          />
        </div>
        {error && <div>{error}</div>}
      </Container>
    </ScrollableContainer>
  );
};

export default SignUp;

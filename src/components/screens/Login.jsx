// import React, { useState } from "react";
import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { BASE_URL } from "../../axiosConfig";
import axios from "axios";
import { Helmet } from "react-helmet";
import { UserContext } from "../../App";
import queryString from "query-string";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { updateUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [nextPath, setNextPath] = useState(null);

  useEffect(() => {
    const { search } = location;
    const value = queryString.parse(search);
    const { next } = value;
    setNextPath(next);
  },[location]);

  const handleSubmit = (e) => {
    setMessage("");
    e.preventDefault();
    axios
      .post(`${BASE_URL}auth/token/`, { username, password })
      .then((response) => {
        let data = response.data;
        localStorage.setItem("user_data", JSON.stringify(data));
        updateUserData({
          type: "LOGIN",
          payload: data,
        });
        nextPath ? navigate(nextPath) : navigate("/");
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.status === 401) {
          setMessage(error.response.data.detail);
        }
      });
  };
  

  return (
    <Container>
      <Helmet>
        <title>Login | Travel Guide</title>
      </Helmet>
      <LeftContainer>
        <HeaderContainer>
          <Logo src={logo} alt="Logo" />
        </HeaderContainer>
        <MainHeading>Travel to the best beautiful place</MainHeading>
      </LeftContainer>
      <RightContainer>
        <LoginContainer>
          <LoginHeading>Login to your Account</LoginHeading>
          <LoginInfo>Enter email and password to login</LoginInfo>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <TextInput
                type="email"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="Email"
              />
            </InputContainer>
            <InputContainer>
              <TextInput
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />
            </InputContainer>
            <LoginButton to="/auth/create/">Signup Now</LoginButton>
            {message && <ErrorMessage>{message}</ErrorMessage>}
            <ButtonContainer>
              <SubmitButton type="submit">Login</SubmitButton>
            </ButtonContainer>
          </Form>
        </LoginContainer>
      </RightContainer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  padding: 0px 15px;
`;

const LeftContainer = styled.div`
  width: 55%;
  padding: 20px 70px 70px;
`;

const HeaderContainer = styled.div``;

const Logo = styled.img``;

const MainHeading = styled.h1`
  font-size: 5vw;
  color: #046bf6;
  margin-top: 200px;
  line-height: 1.4em;
`;

const RightContainer = styled.div`
  background: #efefef;
  width: 45%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 20px;
  padding: 0 70px 70px;
`;

const LoginContainer = styled.div`
  padding-bottom: 70px;
  border-bottom: 1px solid #fff;
  width: 100%;
`;

const LoginHeading = styled.h3`
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 20px;
`;

const LoginInfo = styled.p`
  font-size: 18px;
  margin-bottom: 35px;
`;

const Form = styled.form`
  width: 100%;
  display: block;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

const TextInput = styled.input`
  padding: 20px 25px 20px 30px;
  width: 100%;
  display: block;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  outline: none;
`;

const LoginButton = styled(Link)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
  color: #046bf6;
  font-size: 15px;
`;

const SubmitButton = styled.button`
  background: #046bf6;
  border: 0;
  outline: 0;
  color: #fff;
  padding: 15px 40px;
  border-radius: 50px;
  font-size: 2vw;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ErrorMessage = styled.p`
  font-size: 17px;
  color: red;
  margin-bottom: 25px;
  text-align: center;
`;

export default Login;

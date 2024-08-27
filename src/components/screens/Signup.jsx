import { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { BASE_URL } from "../../axiosConfig";
import axios from "axios";
import { Helmet } from "react-helmet";
import { UserContext } from "../../App";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { updateUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setMessage("");
    e.preventDefault();
    axios
      .post(`${BASE_URL}auth/register/`, { email, password, first_name: name })
      .then((response) => {
        let data = response.data.data;
        let status_code = response.data.statusCode;
        if (status_code === 6000) {
          localStorage.setItem("user_data", JSON.stringify(data));
          updateUserData({
            type: "LOGIN",
            payload: data,
          });
          navigate("/");
        } else {
          setMessage(response.data.message);
        }
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
        <title>Signup | Travel Guide</title>
      </Helmet>
      <LeftContainer>
        <HeaderContainer>
          <Logo src={logo} alt="Image" />
        </HeaderContainer>
        <MainHeading>Travel to the best beautiful place</MainHeading>
      </LeftContainer>
      <RightContainer>
        <LoginContainer>
          <LoginHeading>Register into Account</LoginHeading>
          <LoginInfo>Create an account to acccess all the features</LoginInfo>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <TextInput
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Name"
              />
            </InputContainer>
            <InputContainer>
              <TextInput
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
            <LoginButton to="/auth/login/">Login Now</LoginButton>
            {message && <ErrorMessage>{message}</ErrorMessage>}
            <ButtonContainer>
              <SubmitButton>Create an Account</SubmitButton>
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

  @media (max-width: 500px) {
    width: 100%;
    padding: 0 3%;
  }
`;

const HeaderContainer = styled.div``;

const Logo = styled.img``;

const MainHeading = styled.h1`
  font-size: 5vw;
  color: #046bf6;
  margin-top: 150px;
  line-height: 1.4em;
`;

const RightContainer = styled.div`
  background: #efefef;
  width: 45%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 20px;
  padding: 10px 70px;
  @media (max-width: 500px) {
    width: 100%;
    padding: 50px 5%;
  }
`;

const LoginContainer = styled.div`
  padding-bottom: 70px;
  border-bottom: 1px solid #fff;
  width: 100%;
`;

const LoginHeading = styled.h3`
  padding-top: 10%;
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    font-size: 4vw;
  }
`;

const LoginInfo = styled.p`
  font-size: 2vw;
  margin-bottom: 35px;
  @media (max-width: 500px) {
    font-size: 3.5vw;
  }
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
  @media (max-width: 500px) {
    font-size: 3.5vw;
    padding: 10%;
  }
`;

const LoginButton = styled(Link)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
  color: #046bf6;
  font-size: 1.5vw;
  @media (max-width: 500px) {
    font-size: 3vw;
  }
`;

const SubmitButton = styled.button`
  background: #046bf6;
  border: 0;
  outline: 0;
  color: #fff;
  padding: 20px 40px;
  border-radius: 50px;
  font-size: 2vw;
  cursor: pointer;
  @media (max-width: 500px) {
    padding: 10px 20px;
    font-size: 3vw;
  }
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

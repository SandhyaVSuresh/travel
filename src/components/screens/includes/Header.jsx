import { useContext } from "react";
import styled from "styled-components";
import logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

function Header() {
  const { userData, updateUserData } = useContext(UserContext);
  const handleLogout = () => {
    updateUserData({
      type: "LOGOUT",
    });
  };

  return (
    <HeaderContainer>
      <LeftBox>
        <LogoImg src={logo} alt="Image" />
      </LeftBox>
      <RightBox>
        {userData && userData.access ? (
          <LogButton onClick={() => handleLogout()}>Log out</LogButton>
        ) : (
          <LogButton to="/auth/login/">Log in</LogButton>
        )}
      </RightBox>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const LeftBox = styled.div`
  margin-left: 5%;
`;

const LogoImg = styled.img`
  display: block;
  width: 100%;
`;

const RightBox = styled.div`
  margin-right: 5%;
`;

const LogButton = styled(Link)`
  border: none;
  background: #fff;
  padding: 10px;
  border-radius: 50px;
  outline: none;
  font-weight: 650;
  color: #000;

  &:hover {
    background: #046bf6;
    color: #fff;
  }
`;

export default Header;

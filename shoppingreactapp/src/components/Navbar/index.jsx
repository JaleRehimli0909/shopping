import React from "react";
import "./style.css";
import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";
import { FaSistrix } from "react-icons/fa";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  paddding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  // return(

  //   <div className="containerNavbar">
  //     <div className="WrapperNavbar">
  //         <div className="LeftNavbar">
  //             <span className="LeftNavbarText">EN</span>
  //             <div className="LeftNavbarSearchContainer">
  //                 <input className="RightNavbarInput" type="text" placeholder="Search..."/>
  //                 <FaSistrix />

  //             </div>
  //         </div>
  //         <div className="CenterNavbar">
  //             <h1 className="CenterNavbarLogo">Rehimli</h1>

  //         </div>
  //         <div className="RightNavbar">
  //             <span className="rightNavbarRegister">Register</span>
  //             <span className="rightNavbarSignin">Signin</span>
  //             <div className="RightNavbarIcons">

  //             {/* <Badge color="secondary" badgeContent={4}>
  //               <BsCart3 />
  //             </Badge>
  //             <Badge color="secondary" badgeContent={100}>
  //               <MailIcon />
  //             </Badge>
  //             <Badge color="secondary" badgeContent={1000} max={999}>
  //               <MailIcon />
  //             </Badge> */}
  //             </div>

  //         </div>
  //     </div>
  //   </div>

  // );

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input className="LeftInputSearch" />
            <FaSistrix style={{ color: "gray", fontSize: "18px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Rehimli</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <BsCart3 />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

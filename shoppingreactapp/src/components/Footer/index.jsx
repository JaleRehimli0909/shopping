import React from "react";
import styled from "styled-components";
import { BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaPinterest } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";

import { BiLogoInstagramAlt, BiLogoLinkedinSquare } from "react-icons/bi";
import { mobile } from "../../Responsive";
const Container = styled.div`
  display: flex;
 ${mobile({flexDirection: 'column'})};

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-rigth: 20px;
`;

const Center = styled.div`
  flex: 1;
  margin-top: 10px;
  padding: 20px;
 ${mobile({display: 'none'})};

`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
flex: 1;
padding:20px;
${mobile({backgroundColor: '#eee'})};

`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Rehimli</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem maxime
          expedita aliquam sequi at, ex repellat aspernatur nisi explicabo. Nam
          eligendi beatae exercitationem accusamus corporis neque ex laborum.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <BsFacebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <BiLogoInstagramAlt />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <BiLogoLinkedinSquare />
          </SocialIcon>
          <SocialIcon color="E60023">
            <FaPinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FaMapMarkerAlt style={{ marginRight: "10px" }} /> 622 Dixie Path,
          South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <BsFillTelephoneFill style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <AiTwotoneMail style={{ marginRight: "10px" }} /> contact@rehimli.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;

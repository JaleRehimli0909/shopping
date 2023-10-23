import React from "react";
import styled from "styled-components";
import { IoMdSend } from "react-icons/io";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-szie: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  boder: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title> Newsletter </Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <IoMdSend />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;

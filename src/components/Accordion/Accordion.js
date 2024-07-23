/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <Item>
    <Title onClick={onClick}>
      {title}
      <Icon isOpen={isOpen}> {isOpen ? "-" : "+"} </Icon>
    </Title>
    {isOpen && <Content>{content}</Content>}
  </Item>
);

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Item = styled.div`
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

const Title = styled.div`
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  background-color: #f5f5f5;
`;

const Icon = styled.span`
  font-size: 1.5rem;
  transition: transform 0.3s;
  transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
`;

const Content = styled.div`
  padding: 15px;
  background-color: #fafafa;
`;

export default Accordion;

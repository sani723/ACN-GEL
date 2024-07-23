/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import colors from "../../utils/colors";

const AccordionItem = ({ title, content, isOpen, onClick, theme }) => (
  <Item>
    <Title onClick={onClick} theme={theme}>
      {title}
      <Icon isOpen={isOpen}> {isOpen ? "-" : "+"} </Icon>
    </Title>
    {isOpen && <Content theme={theme}>{content}</Content>}
  </Item>
);

const Accordion = ({
  items,
  defaultOpenIndex = null,
  multiOpen = false,
  theme = "greenTheme",
}) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  useEffect(() => {
    if (defaultOpenIndex !== null) {
      setOpenIndexes([defaultOpenIndex]);
    }
  }, [defaultOpenIndex]);

  const handleClick = (index) => {
    if (multiOpen) {
      setOpenIndexes((prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index)
          : [...prevIndexes, index]
      );
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    }
  };

  const selectedTheme = colors[theme] || colors["greenTheme"];

  return (
    <Container>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onClick={() => handleClick(index)}
          theme={selectedTheme}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #ddd;
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
  background-color: ${(props) => props.theme.primary};
`;

const Icon = styled.span`
  font-size: 1.5rem;
  transition: transform 0.3s;
  transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
`;

const Content = styled.div`
  padding: 15px;
  background-color: ${(props) => props.theme.background};
`;

export default Accordion;

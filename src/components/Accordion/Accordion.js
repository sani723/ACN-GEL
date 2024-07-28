/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import designTokens from "../../utils/designTokens";

const AccordionItem = ({ title, content, isOpen, onClick, themeName }) => {
  const selectedTheme = designTokens.theme[themeName];
  return (
    <Item>
      <Title onClick={onClick} theme={selectedTheme}>
        {title}
        <Icon isOpen={isOpen}> {isOpen ? "-" : "+"} </Icon>
      </Title>
      {isOpen && <Content theme={selectedTheme}>{content}</Content>}
    </Item>
  );
};

const Accordion = ({
  items,
  defaultOpenIndex = null,
  multiOpen = false,
  themeName = "light",
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

  return (
    <ACNAccordion>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onClick={() => handleClick(index)}
          themeName={themeName}
        />
      ))}
    </ACNAccordion>
  );
};

const ACNAccordion = styled.div`
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
  color: ${(props) => props.theme.secondaryText};
  background-color: ${(props) => props.theme.surface};
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

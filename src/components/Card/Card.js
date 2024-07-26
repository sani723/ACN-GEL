import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import colors from "../../utils/colors";

const Card = ({
  title,
  subtitle,
  body,
  links,
  button,
  image,
  imagePosition = "top",
  backgroundImage = false,
  header,
  footer,
  border = false,
  size = "default",
  textAlign = "left",
  styleType = "primary",
  className,
  themeMode = "light",
}) => {
  const themeColors = colors.theme[themeMode];
  const cardStyles = colors.status;

  return (
    <CardContainer
      size={size}
      border={border}
      textAlign={textAlign}
      styleType={styleType}
      themeColors={themeColors}
      backgroundImage={backgroundImage}
      image={image}
      className={className}
    >
      {header && <Header themeColors={themeColors}>{header}</Header>}
      {image && imagePosition === "top" && !backgroundImage && (
        <Image src={image} position={imagePosition} />
      )}
      <CardContent>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {body && <Body>{body}</Body>}
        {links && <Links>{links}</Links>}
        {button && <Button>{button}</Button>}
      </CardContent>
      {image && imagePosition === "bottom" && !backgroundImage && (
        <Image src={image} position={imagePosition} />
      )}
      {footer && <Footer>{footer}</Footer>}
    </CardContainer>
  );
};

const cardSizes = {
  default: "286px",
  medium: "400px",
  fullBleed: "100%",
};

const textAlignments = {
  left: "left",
  right: "right",
  center: "center",
};

const cardVariants = {
  primary: css`
    background-color: #007bff;
    color: white;
  `,
  secondary: css`
    background-color: #6c757d;
    color: white;
  `,
  success: css`
    background-color: #28a745;
    color: white;
  `,
  danger: css`
    background-color: #dc3545;
    color: white;
  `,
  warning: css`
    background-color: #ffc107;
    color: white;
  `,
  info: css`
    background-color: #17a2b8;
    color: white;
  `,
  outline: css`
    background-color: transparent;
    border: 1px solid #6c757d;
    color: #6c757d;
  `,
};

const CardContainer = styled.div`
  width: ${(props) => cardSizes[props.size]};
  border: ${(props) => (props.border ? "1px solid #ddd" : "none")};
  border-radius: 4px;
  overflow: hidden;
  text-align: ${(props) => textAlignments[props.textAlign]};
  ${(props) => cardVariants[props.styleType]}
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.image})` : "none"};
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Header = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.themeColors.surface};
  color: ${(props) => props.themeColors.primaryText};
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) =>
    props.position === "top" || props.position === "bottom" ? "auto" : "100%"};
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  margin: 0 0 0.5rem 0;
`;

const Subtitle = styled.h4`
  margin: 0 0 1rem 0;
  font-weight: normal;
`;

const Body = styled.p`
  margin: 0 0 1rem 0;
`;

const Links = styled.div`
  margin: 1rem 0;
`;

const Button = styled.button`
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Footer = styled.div`
  padding: 1rem;
  background-color: #f8f9fa;
`;

export default Card;

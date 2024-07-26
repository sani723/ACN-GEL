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
  themeName = "light",
  showHeader = true,
  showFooter = true,
}) => {
  const theme = colors.theme[themeName];
  const statusColors = colors.status;

  return (
    <CardContainer
      size={size}
      border={border}
      textAlign={textAlign}
      styleType={styleType}
      theme={theme}
      backgroundImage={backgroundImage}
      image={image}
      className={className}
      statusColors={statusColors}
    >
      {showHeader && <Header theme={theme}>{header}</Header>}
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
      {showFooter && <Footer>{footer}</Footer>}
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

const getCardVariants = (styleType, statusColors, theme) => {
  switch (styleType) {
    case "success":
      return css`
        background-color: ${statusColors.success};
        color: white;
      `;
    case "warning":
      return css`
        background-color: ${statusColors.warning};
        color: white;
      `;
    case "danger":
      return css`
        background-color: ${statusColors.error};
        color: white;
      `;
    case "info":
      return css`
        background-color: ${statusColors.info};
        color: white;
      `;
    case "primary":
      return css`
        background-color: #0c6cf6;
        color: white;
      `;
    case "secondary":
      return css`
        background-color: #6b727a;
        color: white;
      `;
    case "outline":
      return css`
        background-color: ${theme.background};
        border: 1px solid ${theme.primaryText};
        color: ${theme.primaryText};
      `;
    default:
      return css`
        background-color: white;
        color: #000;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
      `;
  }

  //   primary: css`
  //     background-color: #007bff;
  //     color: white;
  //   `,
  //   secondary: css`
  //     background-color: #6c757d;
  //     color: white;
  //   `,
  //   success: css`
  //     background-color: #28a745;
  //     color: white;
  //   `,
  //   danger: css`
  //     background-color: #dc3545;
  //     color: white;
  //   `,
  //   warning: css`
  //     background-color: #ffc107;
  //     color: white;
  //   `,
  //   info: css`
  //     background-color: #17a2b8;
  //     color: white;
  //   `,
  //   outline: css`
  //     background-color: transparent;
  //     border: 1px solid #6c757d;
  //     color: #6c757d;
  //   `,
};

const CardContainer = styled.div`
  width: ${(props) => cardSizes[props.size]};
  border: ${(props) => (props.border ? "1px solid #ddd" : "none")};
  border-radius: 4px;
  overflow: hidden;
  text-align: ${(props) => textAlignments[props.textAlign]};
  ${(props) =>
    getCardVariants(props.styleType, props.statusColors, props.theme)}
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.image})` : "none"};
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Header = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.primaryText};
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

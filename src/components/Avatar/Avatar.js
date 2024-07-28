import React, { useState } from "react";
import designTokens from "../../utils/designTokens";
import styled from "@emotion/styled";
import { FaUser } from "react-icons/fa";

const Avatar = ({
  label,
  size = "medium",
  src,
  icon: Icon = FaUser,
  alt,
  ariaLabel,
  role,
  className,
  themeName,
}) => {
  const [imgError, setImgError] = useState(false);
  const theme = designTokens.theme[themeName];

  const handleError = () => {
    setImgError(true);
  };

  const sizes = {
    small: "24px",
    medium: "48px",
    large: "96px",
  };

  const avatarSize = sizes[size] || sizes.medium;

  return (
    <AvatarContainer
      size={avatarSize}
      role={role}
      className={className}
      aria-label={ariaLabel}
      theme={theme}
    >
      {src && !imgError ? (
        <Image src={src} alt={alt} onError={handleError} />
      ) : label ? (
        <TextAvatar>{label[0]}</TextAvatar>
      ) : (
        <IconAvatar as={Icon} />
      )}
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.secondaryText};
  color: ${(props) => props.theme.background};
  font-size: calc(${(props) => props.size} / 2.5);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const TextAvatar = styled.span`
  font-weight: bold;
`;

const IconAvatar = styled.div`
  font-size: 1.5em;
`;

export default Avatar;

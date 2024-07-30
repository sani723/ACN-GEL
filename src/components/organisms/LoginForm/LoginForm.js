import React from "react";
import PropTypes from "prop-types";
import FormField from "../../molecules/FormField";
import Button from "../../atoms/Button/Button";
import styled from "@emotion/styled";
import designTokens from "../../../utils/designTokens";

const LoginForm = ({ themeName }) => (
  <FormWrapper themeName={themeName}>
    <FormField
      labelTag="label"
      labelText="Username"
      inputType="text"
      inputName="txtuserName"
      themeName={themeName}
    />
    <FormField
      labelTag="label"
      labelText="Password"
      inputType="password"
      inputName="txtPassword"
      themeName={themeName}
    />
    <Button
      label="Login"
      variant="secondary"
      size="medium"
      themeName={themeName}
    />
  </FormWrapper>
);

LoginForm.propTypes = {
  themeName: PropTypes.oneOf(["light", "dark"]).isRequired,
};

const FormWrapper = styled.form`
  max-width: 500px;
  margin: ${designTokens.spacing.lg};
  padding: ${designTokens.spacing.lg};
  border: ${(props) =>
    `${designTokens.borders.width.sm} solid ${designTokens.theme[props.themeName].borders}`};
  box-shadow: ${designTokens.shadows.lg};
`;

export default LoginForm;

import React from "react";
import PropTypes from "prop-types";
import Label from "../atoms/Label/Label";
import TextField from "../atoms/TextInput/TextInput";

const FormField = ({
  labelTag,
  labelText,
  inputType,
  inputName,
  themeName,
  ...props
}) => (
  <div>
    <Label
      tag={labelTag}
      htmlFor="inputUserName"
      themeName={themeName}
      text={labelText}
    />
    <TextField
      type={inputType}
      id={inputName}
      name={inputName}
      themeName={themeName}
    />
  </div>
);

FormField.propTypes = {
  labelTag: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  themeName: PropTypes.oneOf(["light", "dark"]).isRequired,
};

export default FormField;

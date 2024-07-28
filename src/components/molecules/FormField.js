import React from "react";
import PropTypes from "prop-types";
import Label from "../atoms/Label/Label";
import TextField from "../atoms/TextInput/TextInput";

import Input from "./Input";

const FormField = ({ label, themeName, ...props }) => (
  <div>
    <Label themeName={themeName}>{label}</Label>
    <TextField type="text" themeName={themeName} {...props} />
  </div>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  themeName: PropTypes.oneOf(["light", "dark", "custom"]).isRequired,
};

export default FormField;

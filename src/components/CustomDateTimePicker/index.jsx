import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import DateTimePicker from "@mui/lab/DateTimePicker";

CustomDateTimePicker.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

CustomDateTimePicker.defaultProp = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function CustomDateTimePicker(props) {
  const { field, form, type, label, disabled, placeholder } = props;
  const { name } = field;
  const { errors, touched } = form;
  const error = touched[name] && errors[name];
  return (
    <DateTimePicker
      variant="outlined"
      size="small"
      fullWidth
      id={name}
      {...field}
      label={label}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      form={form}
      error={error}
      helperText={error}
      renderInput={(props) => <TextField {...props} />}
    />
  );
}

export default CustomDateTimePicker;

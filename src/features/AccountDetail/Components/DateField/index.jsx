import React from "react";
import PropTypes from "prop-types";

DateField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

DateField.defaultProp = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};
function DateField(props) {
  const { field, form, type, label, disabled, placeholder } = props;
  const { name } = field;
  const { errors, touched } = form;
  const error = touched[name] && errors[name];
  return (
    <DateField
      disableToolbar
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
      KeyboardButtonProps={{
        "aria-label": "change date",
      }}
    />
  );
}

export default DateField;

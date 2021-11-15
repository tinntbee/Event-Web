import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disable: PropTypes.bool
};

InputField.defaultProp = {
    type: 'text',
    label: '',
    placeholder: '',
    disable: false
}

function InputField(props) {
    return (
        <>
            
        </>
    );
}

export default InputField;
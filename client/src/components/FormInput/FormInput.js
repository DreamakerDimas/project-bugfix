import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './FormInput.module.sass';

const FormInput = (props) => {
    const {label, input, type, meta: {touched, error, visited}} = props;
    const inputClassName = classNames(styles.input, {
        [styles.notValid]: touched && error,
        [styles.valid]: visited && !error
    });

    return (
        <div className={styles.inputContainer}>
            <input {...input} placeholder={label} type={type}
            className={inputClassName} />
            {styles.filedWarning && (touched && (error && <span classNames={styles.fieldWarning}>{error}</span>))}
        </div>
    )
};

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired, 
}

export default FormInput;
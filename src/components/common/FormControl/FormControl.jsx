import React from "react";
import styles from "./FormControl.module.css"
import {Field} from "redux-form";

const FormControl = ({ meta: {error, touched}, children, text}) => {
    let hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                {children}{text}
            </div>
            { hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = ({input, ...props}) => {
    return (
        <FormControl {...props}>
            <textarea {...input} {...props}/>
        </FormControl>
    )
}

export const Input = ({input, text, ...props}) => {
    return (
        <FormControl {...props}>
            <input {...input} {...props}/>{text}
        </FormControl>
    )
}

export const createField = (placeholder = "", name, component, validations, props ) => {
    return (
        <div>
            <Field placeholder={placeholder} name={name} component={component} validate={[...validations]} {...props}/>
        </div>
    )
}
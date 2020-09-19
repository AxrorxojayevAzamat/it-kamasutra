import React from "react";
import styles from "./FormControl.module.css"
import {Field} from "redux-form";
import {required} from "../../../utils/validations/validate";

const FormControl = ({ meta: {error, touched}, children}) => {
    let hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                {children}
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

export const Input = ({input, ...props}) => {
    return (
        <FormControl {...props}>
            <input {...input} {...props}/>
        </FormControl>
    )
}

export const createField = (placeholder = "", name, component, validations, props, text = "" ) => {
    return (
        <div>
            <Field placeholder={placeholder} name={name} component={component} validate={[...validations]} {...props} />{text}
        </div>
    )
}
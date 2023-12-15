import React from "react";
import { useField } from "formik";
import {StyledInput} from "./Input.styled";

const Input = ( { label, ...props } ) => {
    const [field, meta] = useField(props);
    return(
        <StyledInput>
            <label>{label}</label>
            <input {...field} {...props} className={meta.touched && meta.error ? "input-error" : ""} />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </StyledInput>
    );
}

export default Input;
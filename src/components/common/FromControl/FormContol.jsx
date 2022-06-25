import React from "react";
import s from './FormControl.module.css';

export const Element = (Element) => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={hasError ? s.ErrorInput : ''}>
                <Element {...input} {...props}/>
            </div>
            { hasError && <span className={s.ErrorText}>{meta.error}</span>}
        </div>
    )
}

export const Input = Element('input');
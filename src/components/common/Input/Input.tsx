import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from './Input.module.css'

export type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { error?: string}

export const Input: React.FC<InputPropsType> = ({error, ...props}) => {

    return (
        <div className={style.inputContainer}>
                <input
                    className={style.Input}
                    {...props}
                />
            <span className={style.error}>{error}</span>
        </div>
    );
};
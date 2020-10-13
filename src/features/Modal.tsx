import React from 'react';
import style from './Modal.module.css'
import {Background} from './Background';

type ModalPropsType = { show: boolean, onChangeTitle?: (value: string) => void }

export const Modal: React.FC<ModalPropsType> = (props) => {

    return (
        <>
            <Background show={props.show}/>
            <div
                className={style.Modal}
                style={{
                    transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                    opacity: props.show ? 1 : 0
                }}
            >
                {props.children}
            </div>
        </>
    )
}
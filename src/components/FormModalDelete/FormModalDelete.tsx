import React, {CSSProperties} from 'react';
import style from './FormModalDelete.module.css'
import {Button} from "../common/Button/Button";
import { Input } from '../common/Input/Input';

export type FormModalPropsType = {
    modalClosed: () => void
    deleteTask: () => void
    name: string
}

export const FormModalDelete: React.FC <FormModalPropsType> = (props) => {

    const cancelHandler = () => {
        props.modalClosed();
    };

    const deleteTask = () => {
        props.modalClosed();
        props.deleteTask();
    };


    return (
        <div className={style.box}>
                <Button borderColor={'#c29ba2'} backgroundAfter={'#c29ba2'} onClick={cancelHandler} title={'Отмена'}/>
                <Button borderColor={'#ff0000'} backgroundAfter={'#ff0000'} onClick={deleteTask} title={'Удалить'}/>
        </div>
    )
}
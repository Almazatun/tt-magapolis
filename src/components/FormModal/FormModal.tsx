import React from 'react';
import style from './FormModal.module.css'
import {Button} from "../common/Button/Button";
import {Input} from '../common/Input/Input';
import cancel from '../../components/common/style/icons/cancel.svg'

export type FormModalPropsType = {
    title: string
    onChangeTitle: (value: string) => void
    modalClosed: () => void
    createTask: () => void
    name: string
}

export const FormModal: React.FC <FormModalPropsType> = (props) => {

    const onChnage = (event: any) => {
        props.onChangeTitle(event.target.value);
    };

    const cancelHandler = () => {
        props.modalClosed();
        props.onChangeTitle("");
    };

    const createTask = () => {
        props.modalClosed();
        props.createTask();
        props.onChangeTitle("");
    };


    return (
        <div className={style.box}>
            <div className={style.top}>
                <span>{props.name}</span>
                <img onClick={cancelHandler} src={cancel} alt="/"/>
            </div>
            <div className={style.middle}>
                <Input value={props.title} onChange={onChnage} />
            </div>
            <div className={style.bottom}>
                <Button borderColor={'#39b54a'} backgroundAfter={'#39b54a'} onClick={createTask} title={'Создать'}/>
            </div>
        </div>
    )
}
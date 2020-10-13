import React from 'react';
import style from './FormModalModify.module.css'
import {Button} from "../common/Button/Button";
import {Input} from '../common/Input/Input';

export type FormModalPropsType = {
    taskName: string
    title: string
    onChangeTitle: (value: string) => void
    modalClosed: () => void
    modifyTitle: () => void
    name: string
}

export const FormModalModify: React.FC <FormModalPropsType> = (props) => {

    const onChnage = (event: any) => {
        props.onChangeTitle(event.target.value);
    };

    const cancelHandler = () => {
        props.modalClosed();
        props.onChangeTitle("");
    };

    const createTask = () => {
        props.modalClosed();
        props.modifyTitle();
        props.onChangeTitle("");
    };


    return (
        <div className={style.box}>
            <div style={{marginBottom: '22px', position: 'relative', right: '140px'}}>
                <span style={{fontSize: '32px', fontWeight: 'bold', fontFamily: 'Roboto'}}>{props.taskName}</span>
            </div>
            <div className={style.top}>
                <span>{props.name}</span>
            </div>
            <div className={style.middle}>
                <Input value={props.title} onChange={onChnage} />
            </div>
            <div className={style.bottom}>
                <Button className={style.btnModify} borderColor={'#0071BC'} backgroundAfter={'#0071BC'} onClick={cancelHandler} title={'Вернуться в список'}/>
                <Button borderColor={'#39b54a'} backgroundAfter={'#39b54a'} onClick={createTask} title={'Изменить'}/>
            </div>
        </div>
    )
}
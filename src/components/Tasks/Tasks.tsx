import React, {useState} from 'react'
import style from './Tasks.module.css'
import {Table} from '../common/Table/Table'
import {Button} from '../common/Button/Button'
import {Modal} from "../../features/Modal";
import {FormModal} from "../FormModal/FormModal";

type TasksPropsType = {}

export const Tasks: React.FC<TasksPropsType> = (props) => {

    const [modalToggle, setModalToggle] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const onChangeHandler = (title: string) => {
        setTitle(title)
    }

    const modalHandler = () => {
        setModalToggle(!modalToggle);
    };


    return (
        <div className={style.container}>
            <div className={style.box}>
                <h1>Список задач</h1>
                <Button onClick={modalHandler} backgroundAfter={'#39b54a'} title={'Добавить'} borderColor={'#39b54a'}/>
            </div>
            <Table/>
            <Modal show={modalToggle} modalClosed={modalHandler}>
                <FormModal
                    title={title}
                    modalClosed={modalHandler}
                    name={'Краткое описание'}
                    onChangeTitle={onChangeHandler}
                    createTask={() => alert('send')}
                />
            </Modal>
        </div>
    )
}
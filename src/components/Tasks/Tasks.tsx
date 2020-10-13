import React, {useState} from 'react'
import style from './Tasks.module.css'
import {Table} from '../common/Table/Table'
import {Button} from '../common/Button/Button'
import {Modal} from "../../features/Modal";
import {FormModal} from "../FormModal/FormModal";
import {TaskType} from "../../api/api";

type TasksPropsType = {
    tasks: Array<TaskType>
    isFetch: boolean
    deleteTask: (idTask: string | number) => void
    createTask: (title: string) => void
    changeTitleOfTask: (taskId: number | string ,title: string) => void
}

export const Tasks: React.FC<TasksPropsType> = (props) => {

    const [modalToggle, setModalToggle] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string>('')
    //console.log('Error' , error)
    //console.log('Title' , title)

    const onChangeHandler = (title: string) => {
        setTitle(title)
    }

    const createTask = () => {
        if (title.trim() !== '') {
            //props.createTask(title)
            alert('success')
            setError('')
        } else {
            setError('Заголовок не может быть пустым')
        }
        setTimeout(() => {
            setError('')
        }, 5000)
    }

    const modalHandler = () => {
        setModalToggle(!modalToggle);
    };


    return (
        <div className={style.container}>
            <div className={style.box}>
                <h1>Список задач</h1>
                <Button disabled={props.isFetch} onClick={modalHandler} backgroundAfter={'#39b54a'} title={'Добавить'}
                        borderColor={'#39b54a'}/>
            </div>
            <Table tasks={props.tasks}
                   deleteTask={props.deleteTask}
                   changeTitleOfTask={props.changeTitleOfTask}
            />
            <Modal show={modalToggle}>
                <FormModal
                    error={error}
                    title={title}
                    modalClosed={modalHandler}
                    name={'Краткое описание'}
                    onChangeTitle={onChangeHandler}
                    createTask={createTask}
                />
            </Modal>
        </div>
    )
}
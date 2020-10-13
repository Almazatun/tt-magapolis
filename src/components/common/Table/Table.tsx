import React, {useState} from "react";
import style from './Table.module.css'
import {Modal} from "../../../features/Modal";
import {FormModalDelete} from "../../FormModalDelete/FormModalDelete";
import edit from '../style/icons/edit.svg'
import remove from '../style/icons/remove.svg'
import {TaskType} from "../../../api/api";
import {FormModalModify} from "../../FormModalModify/FormModalModify";


type TablePropsType = {
    tasks: Array<TaskType>
    deleteTask: (idTask: string | number) => void
    changeTitleOfTask: (taskId: number | string ,title: string) => void
}

export const Table: React.FC<TablePropsType> = (props) => {

    const [modalToggle, setModalToggle] = useState<boolean>(false);
    const [idTask, setIdTask] = useState<string | number>('');
    ///////////////////////////////////////////////////////////////////////

    const [modalModifyTask, setModalModifyTask] = useState<boolean>(false);
    const [description, setDescription] = useState<string>('')

    const [taskTitle, setTaskTitle] = useState<string>('')

    const onChangeHandler = (title: string) => {
        setDescription(title)
    }

    const modalModifyHandler = () => {
        setModalModifyTask(!modalModifyTask);
    };

    const changeTitleOfTask = () => {
        props.changeTitleOfTask(idTask, description)
    }

////////////////////////////////////////////////////////////////////////////
    const modalHandler = () => {
        setModalToggle(!modalToggle);
    };

    const setId = (idTask: string | number) => {
        setIdTask(idTask)
    }

    const deleteTask = () => {
        props.deleteTask(idTask)
    }

    let TSX = props.tasks.map((e, index) => {
        //console.log(typeof e.id)
        const showModal = () => {
            setId(e.id)
            modalHandler()
        }

        const showModify = () => {
            setId(e.id)
            modalModifyHandler()
            setDescription(e.title)
            setTaskTitle(`Задача №${++index}`)
        }
        return (
            <div className={style.element}>
                <div className={style.th}>
                    <span>
                    {`Задача №${++index}`}
                </span>
                </div>
                <div className={style.tr}>
                    <span>{e.title}</span>
                </div>
                <div className={style.btns}>
                    <img onClick={showModify} src={edit} alt="/"/>
                    <img onClick={showModal} src={remove} alt="/"/>
                </div>
            </div>
        )
    })

    return (
        <>
            {TSX}
            <Modal show={modalToggle} >
                <FormModalDelete
                    deleteTask={deleteTask}
                    modalClosed={modalHandler}
                    name={'Краткое описание'}
                />
            </Modal>
            {/*//////////////////////////////////////////////////////////////*/}
            <Modal show={modalModifyTask} >
                <FormModalModify
                    taskName={taskTitle}
                    title={description}
                    modalClosed={modalModifyHandler}
                    name={'Краткое описание'}
                    onChangeTitle={onChangeHandler}
                    modifyTitle={changeTitleOfTask}
                />
            </Modal>
        </>
    )
}
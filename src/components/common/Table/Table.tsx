import React, {useState} from "react";
import style from './Table.module.css'
import {Modal} from "../../../features/Modal";
import {FormModalDelete} from "../../FormModalDelete/FormModalDelete";
import edit from '../style/icons/edit.svg'
import remove from '../style/icons/remove.svg'

export const Table: React.FC = () => {

    const [modalToggle, setModalToggle] = useState<boolean>(false);

    const modalHandler = () => {
        setModalToggle(!modalToggle);
    };

    let initArr = [
        {id: '1', title: 'Описание'},
        {id: '2', title: 'Описание'},
        {id: '3', title: 'Описание'},
        {id: '4', title: 'Описание'},
        {id: '5', title: 'Описание'},
    ]


    let TSX = initArr.map((e, index) => {
        return (
            <div className={style.element}>
                <div className={style.th}>
                    <span>
                    {`Задача №${++index}`}
                </span>
                </div>
                <div className={style.tr}>
                    <div className={style.v1}> </div>
                    <span>{e.title}</span>
                    <div className={style.v2}> </div>
                </div>
                <div className={style.btns}>
                    <img src={edit} alt="/"/>
                    <img onClick={modalHandler} src={remove} alt="/"/>
                </div>
            </div>
        )
    })

    return (
        <>
            {TSX}
            <Modal show={modalToggle} modalClosed={modalHandler}>
                <FormModalDelete
                    deleteTask={() => alert('Удалить')}
                    modalClosed={modalHandler}
                    name={'Краткое описание'}
                />
            </Modal>
        </>
    )
}
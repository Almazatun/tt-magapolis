import React, {useEffect} from 'react'
import {Tasks} from "./Tasks";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../state/store";
import {TaskType} from "../../api/api";
import {getTasksTC, deleteTaskTC, createTaskTC, changeTitleOfTaskTC} from '../../state/reducers/tasks-reducer';


export const TasksContainer = () => {
    const tasks = useSelector<AppStateType, Array<TaskType>>(state => state.Tasks.data)
    const isFetch = useSelector<AppStateType, boolean>(state => state.Tasks.isFetching)
    const dispatch = useDispatch()

    const deleteTask = (idTask: string | number) => {
        dispatch(deleteTaskTC(idTask))
    }

    const createTask = (title: string) => {
        dispatch(createTaskTC(title))
    }
const changeTitleOfTask = (taskId: number | string ,title: string) => {
        dispatch(changeTitleOfTaskTC(taskId ,title))
    }

    useEffect(() => {
        dispatch(getTasksTC())
    }, [])

    return <Tasks isFetch={isFetch}
                  tasks={tasks}
                  deleteTask={deleteTask}
                  createTask={createTask}
                  changeTitleOfTask={changeTitleOfTask}

    />

}
import {API, TaskType} from "../../api/api";
import {Dispatch} from "redux";

enum AC_NAMES_TASKS {
    SET_TASKS = 'SET_TASKS',
    DELETE_TASK = 'DELETE_TASK',
    IS_FETCHING = 'IS_FETCHING',
    ADD_TASK = 'ADD_TASK',
    MODIFY_TITLE_OF_TASK = 'MODIFY_TITLE_OF_TASK'
}

type InitStateType = {
    data: Array<TaskType>
    isFetching: boolean
}

const initialState: InitStateType = {
    data: [
        {id: '', title: ''}
    ],
    isFetching: false
}

type ActionsType =
    | ReturnType<typeof setTasksAC>
    | ReturnType<typeof IsFetchingAC>
    | ReturnType<typeof deleteTaskAC>
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof modifyTitleOfTaskAC>

type ThunkType = ActionsType

export const taskReducer = (state: InitStateType = initialState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case AC_NAMES_TASKS.SET_TASKS:
            return {
                ...state,
                data: action.payload
            }
        case AC_NAMES_TASKS.IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case AC_NAMES_TASKS.DELETE_TASK:
            return {
                ...state,
                data: [
                    ...state.data.filter(t => action.payload !== t.id)
                ]
            }
        case AC_NAMES_TASKS.ADD_TASK:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case AC_NAMES_TASKS.MODIFY_TITLE_OF_TASK:
            return {
                ...state,
                data: [
                    ...state.data.map(t => t.id !== action.payload.taskId ? t: {...t, title: action.payload.title})
                ]
            }
        default:
            return state
    }
}


//Actions
export const setTasksAC = (data: Array<TaskType>) => {
    return {type: AC_NAMES_TASKS.SET_TASKS, payload: data} as const;
};
export const IsFetchingAC = (value: boolean) => {
    return {type: AC_NAMES_TASKS.IS_FETCHING, payload: value} as const;
};
export const deleteTaskAC = (taskId: string | number) => {
    return {type: AC_NAMES_TASKS.DELETE_TASK, payload: taskId} as const;
};
export const addTaskAC = (task: TaskType) => {
    return {type: AC_NAMES_TASKS.ADD_TASK, payload: task} as const;
};
export const modifyTitleOfTaskAC = (taskId: string | number ,title: string) => {
    return {type: AC_NAMES_TASKS.MODIFY_TITLE_OF_TASK, payload: {taskId, title}} as const;
};

////////////////////////////////////////////////////////////////////////////////////
//Redux-Thunk

export const getTasksTC = () => {
    return async (dispatch: Dispatch<ThunkType>) => {
        try {
            dispatch(IsFetchingAC(true))
            const response = await API.getTasks()
            dispatch(setTasksAC(response.data))
            dispatch(IsFetchingAC(false))
        } catch (error) {
            alert(error)
        } finally {
            dispatch(IsFetchingAC(false))
        }
    }
}
export const deleteTaskTC = (taskId: string | number) => {

    return async (dispatch: Dispatch<ThunkType>) => {
        try {
            dispatch(IsFetchingAC(true))
            const response = await API.removeTask(taskId)
            dispatch(deleteTaskAC(taskId))
            dispatch(IsFetchingAC(false))
        } catch (error) {
            alert(error)
        } finally {
            dispatch(IsFetchingAC(false))
        }
    }
}

export const createTaskTC = (title: string) => {

    const newTaskObj = (title: string) => {
        return function (id: string | number) {
            return {id: id, title: title}
        }
    }

    return async (dispatch: Dispatch<ThunkType>) => {
        try {
            dispatch(IsFetchingAC(true))
            const response = await API.createTask(title)
            let data = newTaskObj(title)(response.id)
            dispatch(addTaskAC(data))
            dispatch(IsFetchingAC(false))
        } catch (error) {
            alert(error)
        } finally {
            dispatch(IsFetchingAC(false))
        }
    }
}

export const changeTitleOfTaskTC = (taskId: string | number, title: string) => {

    return async (dispatch: Dispatch<ThunkType>) => {
        try {
            dispatch(IsFetchingAC(true))
            const response = await API.updateTask(taskId, title)
            dispatch(modifyTitleOfTaskAC(taskId, title))
            dispatch(IsFetchingAC(false))
        } catch (error) {
            alert(error)
        } finally {
            dispatch(IsFetchingAC(false))
        }
    }
}

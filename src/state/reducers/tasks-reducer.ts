import {TaskType} from "../../api/api";

enum AC_NAMES_TASKS  {
    SET_TASKS = 'SET_TASKS',
    EDIT_TASK = 'EDIT_TASK',
    DELETE_TASK = 'DELETE_TASK',
    SET_ERROR = 'SET_ERROR',
    IS_FETCHING = 'IS_FETCHING'
}

type InitStateType = {
    data: Array<TaskType>
    error: string
    isFetching: boolean
}

const initialState: InitStateType = {
   data: [
       {id: '', title: ''}
   ],
    error: '',
    isFetching: false
}

type ActionsType =
    ReturnType<typeof setTasksAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof IsFetchingAC>

export const taskReducer = (state: InitStateType = initialState, action: ActionsType): InitStateType  => {
    switch (action.type) {
        case AC_NAMES_TASKS.SET_TASKS:
            return {
                ...state,
                data: action.payload
            }
        case AC_NAMES_TASKS.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case AC_NAMES_TASKS.IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state
    }
}


//Actions
export const setTasksAC = (data: Array<TaskType>) => {
    return {type: AC_NAMES_TASKS.SET_TASKS, payload: data} as const;
};
export const setErrorAC = (error: string) => {
    return {type: AC_NAMES_TASKS.SET_ERROR, payload: error} as const;
};
export const IsFetchingAC = (value: boolean) => {
    return {type: AC_NAMES_TASKS.IS_FETCHING, payload: value} as const;
};

////////////////////////////////////////////////////////////////////////////////////
//Redux-Thunk
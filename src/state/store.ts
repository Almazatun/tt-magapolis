import { taskReducer } from "./reducers/tasks-reducer"
import {applyMiddleware, combineReducers, createStore} from "redux";
import ReduxThunk from 'redux-thunk'


const rootReducer = combineReducers({
    Tasks: taskReducer,
})

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export type AppStateType = ReturnType<typeof rootReducer>
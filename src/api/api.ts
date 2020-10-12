import axios from "axios";

let instance = axios.create({
    baseURL:  "https://test.megapolis-it.ru/",
    withCredentials: true,
});

//API
export const API = {
    getTasks() {
        return instance.get<TasksType>(`api/list`).then(res => {
            return res.data
        })
    },
    createTask(title: string){
        return instance.post('api/list', {title: title}).then( res => {
            return res.data
        })
    },

    updateTask (id: number, title: string) {
        return instance.post(`api/list/${id}`, {title: title}).then(res => {
            return res.data
        })
    },
    removeTask (idTask: number){
        return instance.delete(`api/list/${idTask}`)
    }

};

//Types
type TasksType = {
    data: Array<TaskType>
}
export type TaskType = {
    id: number | string
    title: string
}


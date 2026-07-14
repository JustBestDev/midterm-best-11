import { toast } from "react-toastify"
import api from "./mainApi"

export const getAllToDo = async () => {
    try {
        const res = await api.get('/todosv2')
        console.log('res', res)
        return res.data
    } catch (error) {
        console.log("get To Do error",error)
        toast.error("can't get To Do List")
    }
}

export const postToDo = async () => {
    try{
        const res  = await api.post('/todosv2')
    }catch(error){
        console.log("post To Do error",error)
        toast.error("can't post To Do List")
    }
}

export const editToDo = async () => {
    try{
        const res  = await api.patch('/todosv2')
    }catch(error){
        console.log("edit To Do error",error)
        toast.error("can't edit To Do List")
    }
}

export const delToDo = async () => {
    try{
        const res  = await api.delete('/todosv2')
    }catch(error){
        console.log("delete To Do error",error)
        toast.error("can't delete To Do List")
    }
}
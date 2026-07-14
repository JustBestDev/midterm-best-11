import api from '../api/mainApi'
import MyToDo from '../components/MyToDo'
import { useLoaderData } from 'react-router'
import { useUserStore } from '../stores/userStore'
import { useState } from 'react'



function ToDoPage() {

    const logout = useUserStore((state) => state.logout)
    const toDo = useLoaderData()
    const [task, setTask] = useState({
        content: '',
    })

    const hdlChange = (e) => {
        const { name,value } = e.target
        // console.log('e', e.target.value)
        setTask(prev => ({ ...prev,[name]:value}))
    }

    // console.log('toDo', toDo)
    const hdlAdd = async (e) => {
        e.preventDefault()
        try {
            const res = await api.post('/todosv2', task)
            console.log('res', res)

        } catch (error) {

        }
    }

    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <div className='flex flex-col gap-4 bg-white shadow-2xl rounded-2xl p-9 px-10 w-fit h-fit'>
                <div className='text-3xl font-semibold mb-2'>My Todo</div>
                <form className='flex justify-between'
                    onSubmit={hdlAdd}>
                    <input type="text"
                        placeholder='new task'
                        className='text-slate-700 text-lg font-semibold'
                        name='content'
                        value={task.content}
                        onChange={hdlChange} />
                    <button
                        className='cursor-pointer bg-blue-500 hover:bg-blue-800 text-white text-sm font-semibold rounded-2xl p-1.5 px-4'>Add</button>
                </form>
                <hr className='text-slate-300' />
                {toDo.map((item, index) => (
                    <MyToDo key={index} toDoData={item} />
                ))}
                {/* <MyToDo toDoData={toDo[0]}/> */}
            </div>
            <button onClick={logout}
                className='cursor-pointer'>
                Log Out</button>
        </div>
    )
}

export default ToDoPage
import React, { useState } from 'react'
import api from '../api/mainApi'
import { check } from 'zod'

function MyToDo({ toDoData }) {

    const [isChecked, setIsChecked] = useState(toDoData?.isdone)
    // console.log('toDoData', toDoData)

    const hdlEdit = async (e) => {
        e.preventDefault()
        try {
            const res = await api.patch(`/todosv2/update/${toDoData?.id}`, { "isdone": !isChecked, "content": toDoData?.content })
            const { content, isdone } = res.data
            setIsChecked(!isChecked)
            // setIsChecked(isdone? false : true)
            console.log('reseiei', isdone)
        } catch (error) { }
    }

    const hdlDel = async (e) => {
        e.preventDefault()
        try {
            const res = await api.delete(`/todosv2/delete/${toDoData?.id}`)
        } catch (error) { }
    }



    return (
        <div className='flex justify-between gap-20 items-center'>
            <div className='flex gap-2 items-center'>
                <input type="checkbox"
                    defaultChecked={isChecked}
                    id={toDoData?.id}
                    onChange={hdlEdit}
                    className='cursor-pointer h-5 w-5' />
                <label htmlFor={toDoData?.id}

                    className=
                    {
                        `${isChecked
                            ? 'line-through text-slate-400'
                            : null
                        }`
                    }
                >{toDoData?.content}</label>
            </div>
            <div className='flex gap-4 items-center'>
                <button
                    className='cursor-pointer bg-blue-50 hover:bg-blue-200 text-sm rounded-2xl p-1.5 px-4'
                    onClick={hdlEdit}
                >Edit</button>
                <button className='cursor-pointer text-slate-600 hover:text-red-500'
                    onClick={hdlDel}>X</button>
            </div>
        </div>
    )
}

export default MyToDo

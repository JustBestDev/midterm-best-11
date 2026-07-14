import React, { useState } from 'react'
import api from '../api/mainApi'
import { useUserStore } from '../stores/userStore'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { loginSchemas } from '../schemas/loginSchemas'

function LoginPage() {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const navigate = useNavigate()
    const setUserId = useUserStore((state) => state.setUserId)
    const setUser = useUserStore((state) => state.setUser)
    const setToken = useUserStore((state) => state.setToken)


    const hdlChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const hdlLogin = async (e) => {
        e.preventDefault()
        console.log('formData', formData)

        const validateResult = loginSchemas.safeParse(formData)
        if (!validateResult.success) {
            const { username, password } = validateResult.error.flatten().fieldErrors
            if (username) {
                toast.error(username[0])
            }
            if (password) {
                toast.error(password[0])
            }
            return
        }
        try {
            const res = await api.post('/auth/login', formData)
            const { userId, token, username } = res.data.user
            setUserId(userId)
            setUser(username)
            setToken(token)
            navigate('/todo')
            // console.log('res', res)
            toast.success('Login Success!!!')
        } catch (error) {
            console.log('error', error)
            toast.error('Login Failed!!!')
        }
    }

    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <div className='flex flex-col items-center bg-white shadow-2xl rounded-2xl p-9 px-10 w-100 h-fit'>
                <div className='text-3xl font-bold mb-2'>Welcome</div>
                <div className='text-slate-600 text-sm mb-4'>ล็อคอินเพื่อเข้าสู่ระบบทดสอบ Frontend Dev </div>
                <form
                    className='flex flex-col gap-4 w-full font-semibold mb-4'
                    onSubmit={hdlLogin}>
                    <input
                        className='border border-slate-400 text-slate-700 rounded-xl p-2 pl-3'
                        type="text"
                        name='username'
                        placeholder='username'
                        value={formData.username}
                        onChange={hdlChange}
                    />
                    <input
                        className='border border-slate-400 text-slate-700 rounded-xl p-2 pl-3 mb-2'
                        type="password"
                        name='password'
                        placeholder='password'
                        value={formData.password}
                        onChange={hdlChange}
                    />
                    <button
                        className='cursor-pointer bg-blue-500 text-white rounded-2xl p-2 py-3'
                    >LOG IN</button>
                </form>
                <div className='flex gap-1'>
                    <div className='text-slate-600'>Don't have an account?</div>
                    <button className='cursor-pointer text-blue-500 font-semibold'>Register</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
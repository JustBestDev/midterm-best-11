import { useUserStore } from '../stores/userStore'
import { Navigate, Outlet } from 'react-router'

function ProtectRoutes() {
    const token = useUserStore((state) => state.token)
    
    if (!token) {
        return <Navigate to='/' replace />
    } else {
        return <Outlet />
    }
}

export default ProtectRoutes
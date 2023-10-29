import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
    canActive,
    redirectPath = "/"
}) => {
    if(!canActive){
        return <Navigate to={"/"}/>
    }
    return <Outlet/>
}

export default ProtectedRoute;
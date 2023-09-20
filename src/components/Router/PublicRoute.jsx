import { useAuthContext } from "../../context/AuthContext";
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
// import { roles } from "../../const/roles"

export default function PublicRoute() {

    // comprobar en el contexto si existe usuario
    const { user } = useAuthContext()

    if (user) {
        return <Navigate to="/panel" />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );





}

// if (user.role === roles.USER) {
//     return <Navigate to="/panel" />;
// }
// else if (user.role === roles.ADMIN) {
//     return <Navigate to="/adminpanel" />
// }
// return (
//     <div>
//         <Outlet />
//     </div>
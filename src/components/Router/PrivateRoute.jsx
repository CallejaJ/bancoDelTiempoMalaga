import { useAuthContext } from "../../context/AuthContext";
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"


export default function PrivateRoute() {

    // comprobar en el contexto si existe usuario
    const { user } = useAuthContext()

    if (!user) {
        return <Navigate to="/register" />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );

}


// import { useAuthContext } from "../../context/AuthContext";
// import { Outlet } from "react-router-dom"
// import { Navigate } from "react-router-dom"
// import { roles } from "../const/roles";


// export default function PrivateRoute({ allowedRoles }) {

//     // comprobar en el contexto si existe usuario
//     const { user } = useAuthContext();

//     return allowedRoles?.includes(user?.roles) ? (<Outlet />)
//         : allowedRoles = roles.ADMIN ? (<Navigate to="/adminpanel" />)
//             : allowedRoles = roles.USER ? (<Navigate to="/panel" />)
//                 : (<Navigate to="/register" />)
// }


//     // comprobar en el contexto si existe usuario
//     const { user } = useAuthContext();

// 1) revisar si el rol es ADMIN, mandar a /adminpanel
// 2) revisar si el rol es USER, mandar a /panel
// 3) mandar a /register

// if (allowedRoles?.includes(user?.role)) { (<Outlet />)}
// else if (user?.role === roles.ADMIN) {(<Navigate to="/adminpanel" />) }
// else if (user?.role === roles.USER) { (<Navigate to="/panel" />)}
// else {(<Navigate to="/register" />)}



import { Outlet } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';


function Layout() {
    return (

        <>
            <SearchBar />
            <Outlet />
        </>

    )
}

export default Layout
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import LoginFormik from "./views/LoginFormik/LoginFormik"
import { useLayoutEffect } from "react";
import "./App.css";

import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import Landing from "./views/Landing/Landing";




export default function App() {

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Landing />}>
                <Route path="home" element={<Home />} />
                <Route path="login" element={<LoginFormik />} />
              </Route>

              {/* Rutas públicas */}
              {/* rutas privadas */}

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Wrapper>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}


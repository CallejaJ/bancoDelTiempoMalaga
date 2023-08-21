import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import LoginFormik from "./views/LoginFormik/LoginFormik"
import { useLayoutEffect } from "react";
import PublicRoute from "./components/Router/PublicRoute";
import PrivateRoute from "./components/Router/PrivateRoute"

import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import Landing from "./views/Landing/Landing";
import Layout from "./Layout";
import Requests from "./views/Requests/Requests";
import RegisterFormik from "./views/RegisterFormik/RegisterFormik";
import Panel from "./views/Panel/Panel";
import UserGuide from "./views/UserGuide/UserGuide";
import Offers from "./views/Offers/Offers";

import { blue, orange } from "@mui/material/colors";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import "./App.css";

const orangeTheme = createTheme({
  palette: {
    primary: {
      light: orange[400],
      main: orange[600],
      dark: orange[800],
    },
    secondary: {
      light: blue[400],
      main: blue[600],
      dark: blue[800],
    },
    text: {
      primary: "#006cff",
      secondary: "#242424"
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },

  MUIPagination: {
    styleOverrides: {
      root: {
        button: {
          color: '#ffa726',
        },
      },
    },
  }
});

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
            <ThemeProvider theme={orangeTheme}>
              <CssBaseline />
            <Routes>
              <Route path="/" element={<Landing />}>
                </Route>
                <Route path="home" element={<Home />} />

                {/* Rutas públicas */}
                <Route element={<PublicRoute />}>
                <Route path="login" element={<LoginFormik />} />
                  <Route path="register" element={<RegisterFormik />} />
                  <Route path="requests" element={<Requests />} />
                  <Route path="offers" element={<Offers />} />
                  <Route path="userguide" element={<UserGuide />} />
              </Route>

                {/* Rutas privadas */}
                <Route path="/panel" element={<PrivateRoute />} >
                  <Route element={<Layout />} >
                    <Route index element={<Panel />} />
                  </Route>
                </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            </ThemeProvider>
          </Wrapper>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}


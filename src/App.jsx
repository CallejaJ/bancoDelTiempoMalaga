import AuthContextProvider from "./context/AuthContext";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
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
import PanelFormik from "./views/Panel/PanelFormik";
import UserGuide from "./views/UserGuide/UserGuide";
import Offers from "./views/Offers/Offers";
import OffersDetails from "./views/OffersDetails/OffersDetails";
import RequestsDetails from "./views/RequestsDetails/RequestsDetails";


// import ChatPage from './views/ChatPage/ChatPage';
// import HomeChat from "./views/HomeChat/HomeChat";
// import socketIO from 'socket.io-client';

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
      secondary: "#242424",
      grey: '#f5f5f5'
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
          color: '#1565c0',
        },
      },
    },
  }
});

// const socket = socketIO.connect('http://localhost:4000');


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
                <Route path="requests" element={<Requests />} />
                <Route path="offers" element={<Offers />} />
                <Route path="userguide" element={<UserGuide />} />

                {/* Rutas públicas */}
                <Route element={<PublicRoute />}>
                <Route path="login" element={<LoginFormik />} />
                  <Route path="register" element={<RegisterFormik />} />
              </Route>

                {/* Rutas privadas */}
                <Route path="/panel" element={<PrivateRoute />} >
                  <Route element={<Layout />} >
                      <Route index element={<PanelFormik />} />
                    <Route path="/panel/offersdetails/" element={<OffersDetails />} />
                    <Route path="/panel/requestsdetails/" element={<RequestsDetails />} />
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


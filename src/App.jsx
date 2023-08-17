import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import LoginFormik from "./views/LoginFormik/LoginFormik"
import { useLayoutEffect } from "react";
import "./App.css";

import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import Landing from "./views/Landing/Landing";
import UserView from "./views/UserView/UserView"
import PublicRoute from "./components/Router/PublicRoute";
import PrivateRoute from "./components/Router/PrivateRoute"
import Layout from "./Layout";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { blue, orange } from "@mui/material/colors";

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
      primary: "#000cff",
      secondary: "#0000ff"
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
              </Route>

              {/* rutas privadas */}
                <Route path="/user" element={<PrivateRoute />} >
                  <Route element={<Layout />} >
                    <Route index element={<UserView />} />
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


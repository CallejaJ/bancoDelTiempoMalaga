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
import OffersFormikDetails from "./views/OffersDetails/OffersFormikDetails";
import RequestsFormikDetails from "./views/RequestsDetails/RequestsFormikDetails";
import { roles } from "./const/roles";


import { blue, orange, grey } from "@mui/material/colors";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import "./App.css";
import PanelContextProvider from "./context/PanelContext";
import AddOfferformik from "./views/AddOffer/AddOfferFormik";
import AddRequestFormik from "./views/AddRequest/AddrequestFormik";
import PanelAdminFormik from "./views/PanelAdmin/PanelAdminFormik";
import ServiceFormikDetails from "./views/ServicesDetails/ServiceFormikDetails";
import DrawerUser from "./components/DrawerUser/DrawerUser";
import AddServiceFormik from "./views/AddService/AddServiceFormik";
import OfferTracking from "./views/Tracking/OfferTracking/OfferTracking";
import RequestTracking from "./views/Tracking/RequestTracking/RequestTracking";
import TransferOrders from "./views/TransferOrders/TransferOrders";


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

      grey: {
        light: grey[400],
        main: grey[600],
        dark: grey[800],
      }
    },
    text: {
      primary: "#006cff",
      secondary: "#242424",
      grey: '#f5f5f5',
      white: 'ghostwhite'
    }
  },
  components: {
    MuiTypography: {
      fontFamily: 'Raleway, Arial',
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
  },

  MuiSelect: {
    defaultProps: {
      variant: 'standard',
    },
    styleOverrides: {

      root: {
        "&.MuiSelect-root": {
          font: "inherit",
          color: "currentColor",
          border: "0",
          background: "none",
          height: "1.4375em",
          margin: "0",
          display: "block",
          width: "100%",
          padding: "14px",
          typography: 'body1'
        }
      },
    }
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
          <PanelContextProvider>
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
                  <Route path="mailbox" element={<DrawerUser />} />

                {/* Rutas públicas */}
                <Route element={<PublicRoute />}>
                    <Route path="login" element={<LoginFormik />} />
                    <Route path="register" element={<RegisterFormik />} />
              </Route>

                {/* Rutas privadas */}
                  <Route path="/panel" element={<PrivateRoute allowedRoles={[roles.USER]} />} >
                  <Route element={<Layout />} >
                      <Route index element={<PanelFormik />} />
                      <Route path="/panel/offersdetails/:id" element={<OffersFormikDetails />} />
                      <Route path="/panel/requestsdetails/:id" element={<RequestsFormikDetails />} />
                      <Route path="/panel/addoffer/" element={<AddOfferformik />} />
                      <Route path="/panel/addrequest/" element={<AddRequestFormik />} />
                      <Route path="/panel/transferorders/" element={<TransferOrders />} />
                      <Route path="/panel/offertracking/:id" element={<OfferTracking />} />
                      <Route path="/panel/requesttracking/:id" element={<RequestTracking />} />
                    </Route>
                  </Route>
                  <Route path="adminpanel" element={<PrivateRoute allowedRoles={[roles.ADMIN]} />}>
                    <Route index element={<PanelAdminFormik />} />
                    <Route path="/adminpanel/servicedetails/:id" element={<ServiceFormikDetails />} />
                    <Route path="/adminpanel/addservice/" element={<AddServiceFormik />} />
                  </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            </ThemeProvider>
          </Wrapper>
          </PanelContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}


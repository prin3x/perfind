import Login from "../pages/Login/Login";
import LandingPage from "../pages/LandingPage/LandingPage";
import Register from "../pages/Register/Register";
import VendorRegister from "../pages/VendorRegister/VendorRegister";
import VendorLogin from "../pages/Login/VendorLogin";

const components = {
  landingPage: {
    path: "/",
    page: LandingPage,
  },
  userLogin: {
    path: "/login",
    page: Login,
  },
  register: {
    path: "/register",
    page: Register,
  },
  venderLogin: {
    path: "/vendor/login",
    page: VendorLogin,
  },
  venderRegister: {
    path: "/vendor/register",
    page: VendorRegister,
  },
};

const roles = {
  GUEST: {
    allowedRoutes: [
      components.userLogin,
      components.register,
      components.landingPage,
    ],
    redirectRoutes: "/",
  },
  USER: {
    allowedRoutes: [
      components.userLogin,
      components.register,
      components.landingPage,
    ],
    redirectRoutes: "/",
  },
  VENDOR: {
    allowedRoutes: [
      components.vendorLogin,
      components.vendorRegister,
      components.landingPage,
    ],
    redirectRoutes: "/",
  },
};

export default roles;

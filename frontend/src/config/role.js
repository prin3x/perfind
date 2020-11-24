import Login from "../pages/Login/Login";
import LandingPage from "../pages/LandingPage/LandingPage";
import Register from "../pages/Register/Register";

const components = {
  landingPage: {
    path: "/",
    page: LandingPage,
  },
  login: {
    path: "/login",
    page: Login,
  },
  register: {
    path: "/register",
    page: Register,
  },
};

const roles = {
  GUEST: [components.login, components.register, components.landingPage],
  USER: [components.login, components.register, components.landingPage],
};

export default roles;

import FeedPage from "../containers/pages/Feed/Feed";
import Login from "../containers/pages/Login/Login";
import ManageList from "../containers/pages/ManageList/ManageList";
import Profile from "../containers/pages/Profile/Profile";
import Register from "../containers/pages/Register/Register";

const components = {
  feed: {
    path: "/",
    page: Index,
  },
  login: {
    path: "/",
    page: Login,
  },
  register: {
    path: "/register",
    page: Register,
  },
  profile: {
    path: "/profile/:id",
    page: Profile,
  },
  list: {
    path: "/list",
    page: ManageList,
  },
};

const roles = {
  GUEST: [components.login, components.register],
  USER: [components.feed, components.profile, components.list],
};

export default roles;

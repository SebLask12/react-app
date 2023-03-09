import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";

import Header from "./components/Header";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

import { authActions } from "./store/index";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;

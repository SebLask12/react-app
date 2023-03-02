import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButtoj";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = ({onShowCart}) => {
    const clickHandler = () => {
        console.log("clicked");
        onShowCart();
    };
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
              <HeaderCartButton onClick={clickHandler} />
      </header>
          <div className={classes[`main-image`]}>
        <img
          src={mealsImage}
          alt="meals"
        />
      </div>
    </Fragment>
  );
};

export default Header;

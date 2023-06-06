import React, { useState } from "react";
import { Link } from "react-router-dom";

import Backdrop from "../UIElements/Backdrop";
import SideDrawer from "./sideDrawer";
import NavLinks from "./navLinks";
import MainHeader from "./mainheader";
import "./mainnavigation.css";

const MainNavigation = (props) => {

  const openDrawer = () => {
    setDrawerIsOpne(true);
  }

  const closeDrawer = () => {
    setDrawerIsOpne(false);
  }

  const [drawerIsOpen, setDrawerIsOpne] = useState(false);
  
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
      {drawerIsOpen ? (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      ) : null}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">MyCarrerCounselling</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;

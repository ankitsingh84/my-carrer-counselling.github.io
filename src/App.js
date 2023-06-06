// import logo from './logo.svg';
import React from "react";

import "./App.css";

import MainNavigation from './shared/components/navigations/mainnavigation'
import Title from "./information/pages/title";
import Intro from "./information/pages/intro";
import Offerings from "./information/pages/offerings";
import WhoCanJoin from "./information/pages/whocanjoin";
const App = () => {
  return (
    <div>
      <MainNavigation />
      {/* <Title /> */}
      <main>
        <Title/>
        <Intro />
        <Offerings />
        <WhoCanJoin />
      </main>
    </div>
  );
};
export default App;

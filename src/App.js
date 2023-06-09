// import logo from './logo.svg';
import React from "react";
import { Routes} from "react-router-dom";

import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Users from "./users/pages/users";
import MainNavigation from "./shared/components/navigations/mainnavigation";
import Title from "./information/pages/title";
import Intro from "./information/pages/intro";
import Offerings from "./information/pages/offerings";
import WhoCanJoin from "./information/pages/whocanjoin";
const App = () => {
  return (
    <div>
      <MainNavigation />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Intro /> <Offerings /> <WhoCanJoin />
              </div>
            }
          />
          <Route path="/users" element={<Users />} />
        </Routes>
      </main>
    </div>
  );
};
export default App;

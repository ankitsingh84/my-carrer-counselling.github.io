import React from "react";

import './whocanjoin.css'

const WhoCanJoin = () => {
  return (
    <div className="container">
      <h1 className="whocanjointitle">Who can join?</h1>
      <ul className="whocanjoin">
        <li>
          Currently we have launched the program for students of class 10th to
          12th.{" "}
        </li>
        <li>
          Students who needs guidance in their career exploration can join our
          community.{" "}
        </li>
        <li>
          We are planning to launch program for other students as well in the
          near future.{" "}
        </li>
      </ul>
    </div>
  );
};

export default WhoCanJoin;

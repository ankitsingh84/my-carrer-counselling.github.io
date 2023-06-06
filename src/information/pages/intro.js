import React from "react";

import './intro.css'

const Intro = () => {
  return (
    <div className="container">
      <div className="carrercounsellingimg">
        <img
          alt="My Carrer Counselling"
          src="https://edumilestones.com/blog/images/importance-of-career-counselling.png"
        ></img>{" "}
      </div>
      <div className="intro">
        <div>
          <p>
            {" "}
            Welcome to MyCareerCounseling! Whether you're a high school student
            or a concerned parent, our platform is here to provide you with
            comprehensive career guidance. Explore a wide range of industries
            and discover exciting career options that align with your interests
            and aspirations. Our team of dedicated mentors is ready to support
            you on your journey toward a fulfilling and successful future. Let's
            embark on this transformative career exploration together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;

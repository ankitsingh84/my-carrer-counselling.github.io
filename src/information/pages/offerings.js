import React from "react";

import './offerings.css'

const Offerings = () => {
  return (
    <div className="container">
      <ul>
      <div>
      <h3 className="offeringsList">
        Learn from the people who were in your shoes
      </h3>
      <p className="offeringsListItems">
        We have mentors who were there in your shoes a few years back. So they
        understand what you are feeling and can understand your situation in a
        better way. You can learn from their mistakes and try to avoid them in
        your decisions.
      </p>
      </div>
      <div>
      <h3 className="offeringsList">No hidden charges/ motives</h3>
      <p className="offeringsListItems">
        We are group of motivated individuals who wants to make a change in the
        society. We are trying to build a community to bring a change in the
        society and the programs that we conduct is completely free of charge.
      </p>
      </div>
      </ul>
      <h1 className="offerings"> What's there for you</h1>
    </div>
  );
};

export default Offerings;

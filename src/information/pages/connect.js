import React from "react";
import { useState } from "react";

import Button from "../../shared/components/FormElements/button";
import "./connect.css";
import Modal from "../../shared/components/UIElements/Modal";

const Connect = () => {
  const [showForm, setShowForm] = useState(false);

  const openFormHandler = () => setShowForm(true);

  const closeFormHandler = () => setShowForm(false);

  const [queryInputs, setQueryInputs] = useState({});

  const queryInputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setQueryInputs((values) => ({ ...values, [name]: value }));
  };

  const querySubmitHandler = (event) => {
    event.preventDefault();
    alert(queryInputs);
  };

  return (
    <React.Fragment>
      <Modal
        show={showForm}
        header="Join Our Community"
        onCancel={closeFormHandler}
        contentClass="form-item__modal-content"
        footerClass="form-item__modal-actions"
        footer={
          <div>
            <Button inverse OnClick={queryInputHandler}>Submit</Button>
            <Button inverse onClick={closeFormHandler}>Close</Button>
          </div>
        }
      >
        <div className="form-container">
          <form onSubmit={querySubmitHandler}>
            <div className="row"><div className="col-25"><label>Name</label></div>
            <div className="col-75">
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              value={queryInputs.username || ""}
              onChange={queryInputHandler}
            /></div></div>
            <div className="row"><div className="col-25"><label>Email</label></div>
            <div className="col-75">
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              value={queryInputs.email || ""}
              onChange={queryInputHandler}
            /></div></div>
            <div className="row"><div className="col-25"><label>Standard</label></div>
            <div className="col-75">
            <input
              type="text"
              name="standard"
              placeholder="Your Current Standard"
              value={queryInputs.standard || ""}
              onChange={queryInputHandler}
            /></div></div>
            <div className="row"><div className="col-25"><label>Query</label></div>
            <div className="col-75">
            <textarea
              type="text"
              name="query"
              placeholder="Your Query"
              value={queryInputs.query || ""}
              onChange={queryInputHandler}
              style={{height:'100px'}}
            /></div></div>
          </form>
        </div>
      </Modal>
      <div>
        <h2 className="connect-heading">Want to join our community?</h2>
        <h3 className="connect-msg">
          Click on connect with us and fill out the form
        </h3>
        <div className="join-button">
          <Button onClick={openFormHandler}>Connect With Us</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Connect;

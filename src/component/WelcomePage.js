import React from "react";
import "../component/First.css";
const WelcomePage = () => {
  return (
    <div className="intro">
      <h2 className="head">Welcome! First things first...</h2>
      <h4 className="sub"> You can always change them later</h4>
      <label>Full Name</label>
      <input type="text" placeholder="Steve Jobs" />
      <label>Display Name</label>
      <input type="text" placeholder="Steve" />
      {/* <button className="btn">Create Workspace</button> */}
    </div>
  );
};

export default WelcomePage;

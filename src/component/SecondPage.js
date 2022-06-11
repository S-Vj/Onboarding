import React from "react";
import "../component/First.css";
const SecondPage = () => {
  return (
    <div className="intro">
      <h2 className="head">Let's set up a home for all your work</h2>
      <h4 className="sub"> You can always create another workspace later</h4>
      <label>Workspace Name</label>
      <input type="text" placeholder="Eden" />
      <div style={{ display: "flex" }}>
        <label>Workspace URL</label>
        <label style={{ color: "gray", fontSize: "smaller" }}>(optional)</label>
      </div>
      <div style={{ display: "flex" }}>
        <span className="sidebar">www.eden.com/ </span>
        <input style={{ width: "100%" }} type="text" placeholder="Example" />
      </div>
    </div>
  );
};

export default SecondPage;

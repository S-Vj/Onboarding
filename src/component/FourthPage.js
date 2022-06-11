import React from "react";
import "../component/First.css";

const FourthPage = () => {
  return (
    <div>
      <div className="complete">
        <img className="success" src="success.png" alt="success" />
      </div>

      <h2 className="head">Congratulations, Eren!</h2>
      <h4 className="sub">
        You have completed onboaring, you can start using the Eden!
      </h4>
    </div>
  );
};

export default FourthPage;

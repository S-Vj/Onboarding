import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import "../component/First.css";

const card1 = (
  <React.Fragment>
    <CardContent>
      <PersonIcon />
      <div style={{ fontWeight: "800" }}>For myself</div>
      <br />
      <p style={{ color: "gray" }}>
        Write better. Think more clearly. stay organised.
      </p>
    </CardContent>
  </React.Fragment>
);
const card2 = (
  <React.Fragment>
    <CardContent>
      <GroupIcon />
      <div style={{ fontWeight: "800" }}>With my team</div>
      <br />
      <p style={{ color: "gray" }}>
        Wikis, docs, tasks & projects, all in one place
      </p>
    </CardContent>
  </React.Fragment>
);

const ThirdPage = () => {
  return (
    <div className="intro">
      <h2 className="head">How are you planning to use Eden</h2>
      <h4 className="sub">
        We'll streamline your setup experience accordingly
      </h4>

      <div className="butn">
        <div>
          <button className="butn1">
            <Card className="card">{card1}</Card>
          </button>
        </div>
        <div>
          <button className="butn2">
            <Card className="card">{card2}</Card>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import WelcomePage from "./WelcomePage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import { StepLabel } from "@mui/material";
import "../component/First.css";

const steps = ["", "", "", ""];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  //   const handleBack = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //   };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  //   const handleReset = () => {
  //     setActiveStep(0);
  //     setCompleted({});
  //   };

  const pages = [
    "first",
    <WelcomePage />,
    <SecondPage />,
    <ThirdPage />,
    <FourthPage />,
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepLabel color="inherit" onClick={handleStep(index)}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Box>
              <Box />
              {/* <Button onClick={handleReset}>Reset</Button> */}
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
            {/* {<pages [ { activeStep +1}]/>} */}
            {/* <WelcomePage /> */}
            <div> {pages[activeStep + 1]} </div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                pt: 2,
              }}
            >
              {/* <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button> */}
              {/* <Box sx={{ flex: "1 1 auto" }} /> */}
              {/* <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button> */}

              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <button className="btn">Create Workspace</button>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? (
                      <button className="btn">Launch Eden</button>
                    ) : (
                      <button className="btn">Create Workspace</button>
                    )}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}

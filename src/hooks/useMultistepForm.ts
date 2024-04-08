import { useState } from "react";

const useMultistepForm = (getStepsFunction) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = getStepsFunction();

  const step = steps[currentStepIndex].component;
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  const next = () => {
    if (!isLastStep) {
      setCurrentStepIndex((prevIndex) => prevIndex + 1);
    }
  };

  const back = () => {
    if (!isFirstStep) {
      setCurrentStepIndex((prevIndex) => prevIndex - 1);
    }
  };
    const getNextStepLabel = () => {
      return steps[currentStepIndex +1]?.label;
    };

  return {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
    getNextStepLabel,
  };
};

export default useMultistepForm;

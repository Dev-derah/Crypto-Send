import rightArrow from "../../assets/Images/Icons/arrow-rightt.svg";
import { useState } from "react";
import checkedIcon from "../../assets/Images/Icons/checkedIcon.svg";

function DashNav() {
  const [page, setPage] = useState(2);
  const steps = [
    { id: 1, title: "Amount", completed: false },
    { id: 2, title: "Recipient", completed: false },
    { id: 3, title: "Summary", completed: false },
    { id: 4, title: "Send", completed: false },
  ];

  return (
    <div
      id="wrapper"
      className="flex w-full h-24 bg-white items-center justify-center"
    >
      <div id="nav" className="flex items-center gap-4 justify-center">
        {steps?.map(({ id, title, completed }, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className={`w-6 h-6 ${
                completed
                  ? "bg-success-100"
                  : page === id
                  ? "bg-black"
                  : "bg-neutral-7"
              } rounded-full flex items-center justify-center`}
            >
              {completed ? (
                <img src={checkedIcon} alt="checked" />
              ) : (
                <div className="text-white text-[10px] font-bold">
                  {index + 1}
                </div>
              )}
            </div>

            <div
              className={`${
                page === id ? "text-black" : "text-neutral-7"
              } text-sm font-medium capitalize`}
            >
              {title}
            </div>
            {index !== steps.length - 1 && (
              <img src={rightArrow} alt="arrow" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashNav;

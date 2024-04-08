import React from "react";
import totalTransactionsIcon from "../../../assets/Images/Icons/transaction-minus.svg";
import totalMoneySpentIcon from "../../../assets/Images/Icons/coin.svg";
import averageTransactionsIcon from "../../../assets/Images/Icons/send.svg";

interface SummaryStatisticsProps {
  statistics: Array<{value:string|number,statTitle:string}>;
}

const SummaryStatistics: React.FC<SummaryStatisticsProps> = ({statistics}) => {
  const icons = [
    totalTransactionsIcon,
    totalMoneySpentIcon,
    averageTransactionsIcon,
  ];
   

    const iconStyles = ["bg-[#F8E8E8]", "bg-[#EBF9FF]", "bg-none"];

  return (
    <div className="flex w-full justify-between mt-section-padding">
      {statistics?.map(({ value,statTitle }, index) => {
        return (
          <div key={index} className="relative w-full">
            <p className="text-xs flex items-center gap-2 uppercase">
              <span className="">
                <img
                  src={icons[index]}
                  alt={`Icon ${index}`}
                  className={`${iconStyles[index]} p-2 rounded-full `}
                />
              </span>
              {statTitle}
            </p>
            <p className="font-bold text-xl">{value}</p>

            {index !== statistics.length - 1 && (
              <div className="absolute right-6 h-full w-[0.5px] top-0 bg-[#BFBFBF]" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SummaryStatistics;

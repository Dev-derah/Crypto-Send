import React from "react";

interface AssetFlowGraphProps {
  graphData: Array<{
    id: number;
    month: string;
    percentage: number;
    assetAmount: number;
  }>;
}
const AssetFlowGraph: React.FC<AssetFlowGraphProps> = ({ graphData }) => {
  const createBar = (percentage, month, id, assetAmount) => {
    const barHeight = `${percentage}%`;

    return (
      <div
        key={id}
        className="group flex flex-col-reverse items-baseline text-center mt-10"
      >
        <p className="w-full my-2 text-xs">{month}</p>
        <div
          style={{ height: barHeight }}
          className="relative w-14 bg-neutral-4  transition-all duration-500 rounded-xl group-hover:bg-secondary group-hover:shadow-secondary group-hover:shadow-lg group-hover:-translate-y-4"
        >
          <div className="opacity-0 bg-black rounded-xl text-white py-2 px-4 w-20 text-xs absolute right-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[150%] group-hover:opacity-100 delay-100">
            {assetAmount} <span>USD</span>
            <div className="tooltip-triangle"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-between gap-6 w-full my-section-padding h-64">
      {graphData?.map(({ month, percentage, id, assetAmount }) => {
        return createBar(percentage, month, id, assetAmount);
      })}
    </div>
  );
};

export default AssetFlowGraph;

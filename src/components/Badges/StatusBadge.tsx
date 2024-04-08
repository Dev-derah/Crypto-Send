import React from "react";

interface StatusBadgeProps {
  status: string;
}
const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
     const getBackgroundColor = () => {
       switch (status.toLowerCase()) {
         case "completed":
           return "bg-success-50"; 
         case "pending":
           return "bg-secondary-50";
         default:
           return "bg-gray";
       }
     };
          const getTextColor = () => {
            switch (status.toLowerCase()) {
              case "completed":
                return "text-success-800";
              case "pending":
                return "text-secondary-800";
              default:
                return "text-black";
            }
            
          };
  return (
    <div>
      <p
        className={`uppercase ${getBackgroundColor()} ${getTextColor()} rounded-2xl px-4 py-0.5 w-fit text-xs`}
      >
        {status}
      </p>
    </div>
  );
};

export default StatusBadge;

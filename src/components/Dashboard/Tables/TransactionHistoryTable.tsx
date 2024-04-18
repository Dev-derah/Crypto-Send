import React from "react";
import StatusBadge from "../../Badges/StatusBadge";
import { Link } from "react-router-dom";
import viewReceiptIcon from "../../../assets/Images/Icons/viewReceiptIcon.svg";

interface TransactionHistoryProps {
  transactionHistory: Array<{
    id: string;
    description: string;
    status: string;
    date: string;
    amount: string;
    receiptLink: string;
  }>;
}

const TransactionHistoryTable: React.FC<TransactionHistoryProps> = ({
  transactionHistory,
}) => {
  return (
    <table className="w-full table-auto border-separate border-spacing-y-3">
      <thead className=" bg-neutral-3">
        <tr className="text-gray-600 border-b text-left">
          <th className="pl-3 py-3 text-[14px] font-light ">Type</th>
          <th className="py-3 text-[14px] font-light ">Status</th>
          <th className="py-3 text-[14px] font-light">Date</th>
          <th className="py-3 text-[14px] font-light">Amount</th>
          <th className="py-3 text-[14px] font-light">Action</th>
        </tr>
      </thead>
      <tbody className="text-sm font-medium">
        {transactionHistory?.map(
          ({ id, description, status, date, amount, receiptLink }) => {
            return (
              <tr
                key={id}
                className="py-10 cursor-pointer bg-white text-gray-700 my-4 text-left"
                id={id}
              >
                <td className="px-4 py-4">{description}</td>
                <td>
                  <StatusBadge status={status} />
                </td>
                <td>{date}</td>
                <td>{amount}</td>
                <td>
                  <Link
                    to={`receipts/${receiptLink}`}
                    className="flex items-center gap-1"
                  >
                    <img src={viewReceiptIcon}  />
                    View Receipt
                  </Link>
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default TransactionHistoryTable;

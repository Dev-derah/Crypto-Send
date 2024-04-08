import React from "react";
import tether from "../../../../assets/Images/Icons/Tether 1.png";
import bankIcon from "../../../../assets/Images/Icons/bankOutline.svg";
import InfoTextWithIcon from "../../../Common/Texts/InfoTextWithIcon";
import transactionSummary from "./Data/TransactionSummary";
import Username from "../../../Common/Texts/Username";
import { CustomButton } from "../../../Common";

interface SummaryFormProps{
  amountToPay: number,
  next:()=>void
}
const SummaryForm: React.FC<SummaryFormProps> = ({amountToPay,next}) => {
  return (
    <div className=" w-[613px] flex flex-col items-center my-12">
      <div className="text-[20px] font-medium my-4">
        <h3>Summary</h3>
      </div>

      {transactionSummary?.map(({ senderDetails }, index) => (
        <section
          key={index}
          className="w-full bg-neutral-3 rounded-lg py-6 px-8 flex justify-between items-center"
        >
          <div className="flex gap-4">
            <div className="bg-neutral-5 rounded-full w-12 h-12 flex justify-center items-center">
              <img src={tether} />
            </div>
            <div className="">
              <Username username={senderDetails?.senderName} size="small" />
              <p>
                {senderDetails?.amountToSend?.value}
                {senderDetails?.amountToSend?.currency}
              </p>
            </div>
          </div>
          <svg
            width="57"
            height="25"
            viewBox="0 0 57 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.4297 6.28174L53.4997 12.3517L47.4297 18.4217"
              stroke="#595959"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 12.3516L53 12.3516"
              stroke="#595959"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex gap-4">
            <div className="border border-neutral-5 rounded-full w-12 h-12 p-1 flex justify-center items-center">
              <img src={bankIcon} />
            </div>
            <div>
              <p className="text-neutral-8 text-[14px]">
                {senderDetails?.recipientName}
              </p>
              <p>{senderDetails?.amountToReceive.value}</p>
            </div>
          </div>
        </section>
      ))}
      <div className="w-full px-10">
        {transactionSummary?.map(({ receiverDetails }, index) => (
          <div
            className="grid grid-cols-2 w-full border-b border-backgroundElevation py-6"
            key={index}
          >
            <div className="p-3">
              <small>Recipient Name</small>
              <p>{receiverDetails?.receiverName}</p>
            </div>
            <div className="p-3 text-right">
              <small>Recipient Account</small>
              <p>{receiverDetails?.recipientBankAccount}</p>
            </div>
            <div className="p-3">
              <small>Recipient Bank</small>
              <p>{receiverDetails?.recipientBank}</p>
            </div>
            <div className="p-3 text-right">
              <small>Transaction ID</small>
              <p>{receiverDetails?.transactionId}</p>
            </div>
          </div>
        ))}
        {transactionSummary?.map(({ transactionInfo }, index) => (
          <div className="w-full border-backgroundElevation py-6" key={index}>
            <div className="p-3 flex w-full justify-between">
              <InfoTextWithIcon text="Amount to send" />
              <div className="flex gap-2">
                <p>{transactionInfo?.amountToSend?.value}</p>
                <p>{transactionInfo?.amountToSend?.currency}</p>
              </div>
            </div>
            <div className="p-3 flex w-full justify-between">
              <InfoTextWithIcon text="Transaction speed" />
              <div className="flex gap-2">
                <p>{transactionInfo?.transactionSpeed}</p>
              </div>
            </div>
            <div className="p-3 flex w-full justify-between">
              <InfoTextWithIcon text="Expected Delivery" />
              <div className="flex gap-2">
                <p>{transactionInfo?.expectedDelivery}</p>
              </div>
            </div>
            <div className="p-3 flex w-full justify-between">
              <InfoTextWithIcon text="Transaction Fee" />
              <div className="flex gap-1">
                <p>{transactionInfo?.transactionFee.value}</p>
                <p>{transactionInfo?.transactionFee.currency}</p>
              </div>
            </div>
            <div
              className="w-full flex justify-between border-t border-backgroundElevation my-6 py-6 font-bold"
              key={index}
            >
              <p>Total</p>
              <div className="flex gap-1">
                <p>{transactionInfo?.totalCost.value}</p>
                <p>{transactionInfo?.totalCost.currency}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CustomButton
        isFilled={true}
        background="bg-primary"
        size="big"
        className="w-3/5 px-8 my-6"
        onClickFunction={next}
      >
        Pay ${amountToPay}
      </CustomButton>
    </div>
  );
};

export default SummaryForm;

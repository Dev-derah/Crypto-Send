import React, { useState } from "react";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import { CustomButton, PostScript } from "../../components/Common";
import useMultistepForm from "../../hooks/useMultistepForm";
import CrptoAmountForm from "../../components/Dashboard/Forms/Crypto/CrptoAmountForm";
import CryptoRecipientInformationForm from "../../components/Dashboard/Forms/Crypto/CryptoRecipientInformationForm";
import CashRecipientInformationForm from "../../components/Dashboard/Forms/Cash/CashRecipientInformationForm";
import CashAmountForm from "../../components/Dashboard/Forms/Cash/CashAmountForm";
import SummaryForm from "../../components/Dashboard/Forms/Crypto/SummaryForm";
import SendForm from "../../components/Dashboard/Forms/Crypto/SendForm";
type PaymentMethod = "cash" | "crypto";
const SendPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("crypto");

  const handlePaymentMethodChange = (newPaymentMethod) => {
    setPaymentMethod(newPaymentMethod);
  };

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
    getNextStepLabel,
  } = useMultistepForm(() => {
    if (paymentMethod.toLowerCase() === "crypto") {
      return [
        {
          label: "amount",
          component: (
            <CrptoAmountForm
              next={() => next()}
              nextStepLabel={() => getNextStepLabel()}
            />
          ),
        },
        {
          label: "Recipient Details",
          component: (
            <CryptoRecipientInformationForm
              next={() => next()}
              nextStepLabel={() => getNextStepLabel()}
            />
          ),
        },
        {
          label: "Summary",
          component: <SummaryForm amountToPay={906.2} next={() => next()} />,
        },
        { component: <SendForm /> },
      ];
    } else {
      return [<CashAmountForm />, <CashRecipientInformationForm />];
    }
  });

  return (
    <DashboardLayout showHeader={true} showSidebar={true} headerType="progress">
      <div className="flex  relative justify-center w-full items-center flex-col gap-4">
        {isFirstStep && (
          <section className="mt-20 flex w-full justify-center gap-x-20">
            <CustomButton
              onClickFunction={() => handlePaymentMethodChange("crypto")}
            >
              Crypto
            </CustomButton>
            <CustomButton
              onClickFunction={() => handlePaymentMethodChange("cash")}
            >
              Cash
            </CustomButton>
          </section>
        )}
        {!isFirstStep && (
          <button
            onClick={back}
            className="underline flex capitalize absolute left-4 cursor-pointer top-20"
          >
            &lt; Back
          </button>
        )}
        <section className="flex w-full justify-center mt-10">{step}</section>
        {isFirstStep && (
          <PostScript normalText="By checking this box, I acknowledge and agree to the terms and services on behalf of Qoinpal" />
        )}
      </div>
    </DashboardLayout>
  );
};

export default SendPage;

import React from "react";
import FormField from "../../../Common/Inputs/FormField";
import SelectInput from "../../../Common/Inputs/SelectInput";
import { banksData } from "./Data/BankDetails.js";
import useSelectInput from "../../../../hooks/useSelectInput.js";
import {CustomButton} from "../../../Common";

interface CryptoRecipientInformationProps{
  next:()=>void;
  nextStepLabel:()=>string;
}
const CryptoRecipientInformationForm: React.FC <CryptoRecipientInformationProps> = ({next,nextStepLabel}) => {
  const {
    selectedOption: selectedBank,
    dropdownVisible: bankDropdownVisible,
    handleSelect: handleBankSelect,
    toggleDropdown: toggleBankDropdown,
    options: bankOptions,
  } = useSelectInput({
    options: banksData,
  });
  return (
    <div className="w-3/5 space-y-4">
      <div className="text-center text-md font-medium my-14">
        <h3>Recipient Information</h3>
      </div>

      <div className="flex w-full gap-x-10 justify-between items-center">
        <FormField
          type="text"
          disabled={false}
          label="First Name"
          placeholder="Your first name"
          autoFocus={true}
        />
        <FormField
          type="text"
          disabled={false}
          label="Last Name"
          placeholder="Your last name"
        />
      </div>
      <FormField
        type="text"
        disabled={false}
        label="Email"
        placeholder="Enter your email here"
      />
      <div className="flex w-full justify-between gap-x-10 items-center">
        <SelectInput
          options={bankOptions}
          selectedOption={selectedBank}
          dropdownVisible={bankDropdownVisible}
          handleSelect={handleBankSelect}
          toggleDropdown={toggleBankDropdown}
          hasLabel={true}
          labelText="Bank name"
          size="medium"
          customInputClass="bg-white font-normal"
        />
        <FormField
          type="text"
          disabled={false}
          label="Account number"
          placeholder="Enter account number"
          optional={false}
        />
      </div>
      <FormField
        type="text"
        disabled={true}
        placeholder="Account name"
        optional={false}
      />
      <div className="px-3">
        <CustomButton
          size="big"
          isFilled={true}
          className="bg-primary w-full mt-10"
          onClickFunction={next}
        >
          Continue - {nextStepLabel()}
        </CustomButton>
      </div>
    </div>
  );
};

export default CryptoRecipientInformationForm;

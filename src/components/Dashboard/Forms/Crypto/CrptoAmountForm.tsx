import React from "react";
import CurrencyAmountInput from "../../Inputs/CurrencyAmountInput";
import cryptoCurrencies from "./Data/cryptoCurrencies.js";
import useSelectInput from "../../../../hooks/useSelectInput.js";
import CustomButton from "../../../../components/Common/CustomButton.js";
// import CustomButton from "../../../Utilities/CustomButton.js";
interface CryptoAmountFormProps {
  next:()=>void;
  nextStepLabel:()=>string;
}

const CryptoAmountForm: React.FC<CryptoAmountFormProps> = ({
  next,
  nextStepLabel,
}) => {
  const {
    selectedOption: selectedCryptoCurrency,
    dropdownVisible: cryptoDropdownVisible,
    handleSelect: handleCryptoSelect,
    toggleDropdown: toggleCryptoDropdown,
    options: cryptoOptions,
  } = useSelectInput({
    options: cryptoCurrencies,
  });

  const {
    selectedOption: selectedFiatCurrency,
    dropdownVisible: fiatDropdownVisible,
    handleSelect: handleFiatSelect,
    toggleDropdown: toggleFiatDropdown,
    options: fiatOptions,
  } = useSelectInput({
    options: cryptoCurrencies,
  });
  return (
    <div className="flex flex-col gap-6 w-full items-center">
      <CurrencyAmountInput
        type="sender"
        selectedCurrency={selectedCryptoCurrency}
        cryptoCurrencies={cryptoOptions}
        handleSelect={handleCryptoSelect}
        placeholder="100"
        dropdownVisible={cryptoDropdownVisible}
        toogleDropdown={toggleCryptoDropdown}
      />
      <CurrencyAmountInput
        type="receiver"
        selectedCurrency={selectedFiatCurrency}
        cryptoCurrencies={fiatOptions}
        handleSelect={handleFiatSelect}
        placeholder="100"
        dropdownVisible={fiatDropdownVisible}
        toogleDropdown={toggleFiatDropdown}
      />

      <div className="flex w-[50%] justify-between">
        <p className="underline">Total Cost</p>
        <p>$70</p>
      </div>
      <CustomButton size="big" isFilled={true} className="bg-primary w-3/5" onClickFunction={next}>
        Continue - {nextStepLabel()}
      </CustomButton>
      
    </div>
  );
};

export default CryptoAmountForm;

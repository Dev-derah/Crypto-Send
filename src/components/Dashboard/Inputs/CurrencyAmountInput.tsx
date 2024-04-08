import React from "react";
import SelectInput from "../../Common/Inputs/SelectInput";
import InfoTextWithIcon from "../../../components/Common/Texts/InfoTextWithIcon";

interface CurrencyAmountInputProps {
  cryptoCurrencies: [{id:number|string,name:string,logo?:string}];
  selectedCurrency: string;
  handleSelect: (currency: string) => void;
  type: "sender" | "receiver";
  placeholder: string;
  dropdownVisible: boolean,
  toogleDropdown:()=>void,
}
const CurrencyAmountInput: React.FC<CurrencyAmountInputProps> = ({
  type,
  cryptoCurrencies,
  selectedCurrency,
  handleSelect,
  placeholder,
  dropdownVisible,
  toogleDropdown,
}) => {
  const label =
    type === "sender" ? "You send exactly" : "The recipient receives";
  const infoLabel = type === "sender" ? "Exchange Rate" : "Transaction Fee";
  return (
    <div className=" w-full max-w-[626px]">
      <label className="pl-4 font-medium text-base">{label}</label>
      <div className="border rounded-3xl py-3 px-6 mt-1 flex justify-between items-center bg-white">
        <input
          type="number"
          className="bg-none outline-none w-[70%] px-4 font-bold text-2xl bg-transparent relative [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          placeholder={placeholder}
        />
        <SelectInput
          options={cryptoCurrencies}
          selectedOption={selectedCurrency}
          hasBorder={false}
          customClassName="border-l border-neutral-6 w-[30%]"
          hasIcon={true}
          dropdownVisible={dropdownVisible}
          handleSelect={handleSelect}
          toggleDropdown={toogleDropdown}
          size="large"
        />
      </div>
      <div className="mt-4 px-8 flex justify-between items-center">
        <InfoTextWithIcon text={infoLabel}/>
        <p className="text-neutral-8">
          {type === "sender" ? "1 USDT = NGN 980" : "$6.2"}
        </p>
      </div>
    </div>
  );
};

export default CurrencyAmountInput;

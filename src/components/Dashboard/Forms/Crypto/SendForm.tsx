import Card from "../../../Common/Card";
import transactionSummary from "./Data/TransactionSummary";
import SelectInput from "../../../../components/Common/Inputs/SelectInput";
import useSelectInput from "../../../../hooks/useSelectInput";
import cryptoNetworks from "./Data/CryptoNetworks"; // Importing from the file
import FormField from "../../../../components/Common/Inputs/FormField";
import { CustomButton } from "../../../../components/Common";
import qrCode from "../../../../assets/Images/illustrations/qr.svg";
import { redirect } from "react-router-dom";

const SendForm = () => {
  //Dropdown custom hook configurations
  const {
    selectedOption: selectedCryptoNetwork,
    dropdownVisible: cryptoNetworkDropdownVisible,
    handleSelect: handleCryptoNetworkSelect,
    toggleDropdown: toggleCryptoNetworkDropdown,
    options: cryptoNetworkOptions,
  } = useSelectInput({
    options: cryptoNetworks,
  });

  const handleSubmit = () => {
    //handle send request
    redirect('/dashboard');

  };

  return (
    <div className="w-[500px] mt-10  h-full flex flex-col items-center">
      <Card backgroundColor="bg-neutral-3">
        {transactionSummary?.map(({ senderDetails }, index) => (
          <section
            key={index}
            className="w-full bg-neutral-3 rounded-lg flex justify-between items-center"
          >
            <div className="flex gap-4">
              <div className="bg-[#FFC200] rounded-full w-12 h-12 flex justify-center items-center">
                BG
              </div>
              <div className="">
                Receiver
                <p>{senderDetails?.senderName}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <p className="text-neutral-8 text-[14px]">
                  {senderDetails?.recipientName}
                </p>
                <p>{senderDetails?.amountToReceive.value}</p>
              </div>
            </div>
          </section>
        ))}
      </Card>
      <div className="w-full space-y-5 my-8 ">
        <div className="w-full flex justify-center">
          <img src={qrCode} className="w-32 h-32" />
        </div>
        <SelectInput
          options={cryptoNetworkOptions}
          selectedOption={selectedCryptoNetwork}
          handleSelect={handleCryptoNetworkSelect}
          toggleDropdown={toggleCryptoNetworkDropdown}
          dropdownVisible={cryptoNetworkDropdownVisible}
          hasLabel={true}
          labelText="Select Network"
          customClassName="w-full"
        />

        <FormField
          disabled
          type="text"
          label="Wallet Address"
          value={"ms5Pvm6LyGJUdsGMgZ9vMzM4G7Kq91CvoV"}
        />
        <FormField
          disabled
          type="text"
          label="Amount to send"
          value={"902.6 USDT"}
        />

        <CustomButton
          background="bg-black"
          isFilled={true}
          color="text-white"
          size="big"
          className="w-full"
          onClickFunction={handleSubmit}
        >
          I've sent $902.6
        </CustomButton>
      </div>
    </div>
  );
};

export default SendForm;

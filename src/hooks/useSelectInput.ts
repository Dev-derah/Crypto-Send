import { useState } from "react";

interface SelectInputHookProps {
  options:[{id: string;
  name: string;
  logo?: string;
}];
}

const useSelectInput = ({ options }: SelectInputHookProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0]?.name || "");
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setDropdownVisible(false);
    console.log(option);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return {
    selectedOption,
    dropdownVisible,
    handleSelect,
    toggleDropdown,
    options,
  };
};

export default useSelectInput;

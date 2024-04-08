import React from "react";


interface SelectInputProps {
  options: [{ id: string | number; name: string; logo?: string }];
  selectedOption: string;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  hasBorder?: boolean;
  isRounded?: boolean;
  customClassName?: string;
  hasIcon?: boolean;
  dropdownVisible: boolean;
  handleSelect;
  toggleDropdown;
  hasLabel?: boolean;
  labelText?: string;
  customInputClass?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  selectedOption,
  size = "medium",
  backgroundColor = "white",
  hasBorder = true,
  isRounded = true,
  customClassName = "",
  hasIcon = false,
  handleSelect,
  toggleDropdown,
  dropdownVisible,
  hasLabel = false,
  labelText,
  customInputClass,
}) => {
  const containerClasses = `relative inline-block text-left flex-1 ${customClassName}`;
  const buttonClasses = `${customInputClass} inline-flex justify-center items-center w-full px-4 py-2 gap-1 text-lg font-medium focus:outline-primary-800 ${sizeClasses()} ${borderClasses()} ${roundedClasses()} ${backgroundColor}`;
  const dropdownClasses = `origin-top-right bg-white absolute left-0 mt-2 z-50 w-full ${roundedClasses()}`;

  function sizeClasses() {
    switch (size) {
      case "small":
        return "text-sm";
      case "medium":
        return "text-md";
      case "large":
        return "text-xl";
      default:
        return "text-lg";
    }
  }

  function borderClasses() {
    return hasBorder ? "border border-gray-300" : "";
  }

  function roundedClasses() {
    return isRounded ? "rounded-md" : "";
  }

  return (
    <div className={containerClasses}>
      {hasLabel && <label className="text-neutral-8">{labelText}</label>}
      <div>
        <button
          type="button"
          className={`${buttonClasses} ${hasLabel && "mt-2"}`}
          onClick={toggleDropdown}
        >
          <div
            className={`flex gap-x-1 justify-between w-full items-center ${
              backgroundColor !== "white" ? "text-white" : ""
            }`}
          >
            <div className="flex items-center gap-x-2">
              {hasIcon && (
                <img
                  src={
                    options?.find((option) => option.name === selectedOption)
                      ?.logo
                  }
                  className="w-8 h-8"
                />
              )}

              <p
                className={`overflow-hidden whitespace-nowrap text-ellipsis text-md`}
              >
                {selectedOption}
              </p>
            </div>

            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9401 7.56396L10.0501 12.454C9.47256 13.0315 8.52756 13.0315 7.95006 12.454L3.06006 7.56396"
                stroke="#111111"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
      {dropdownVisible && (
        <div className={dropdownClasses}>
          <div className="py-1 max-h-60 overflow-scroll">
            {options?.map(({ id, name, logo }) => (
              <div
                key={id}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer flex gap-2"
                onClick={() => handleSelect(name)}
              >
                {hasIcon && <img src={logo} className="w-6 h-6" />}

                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectInput;

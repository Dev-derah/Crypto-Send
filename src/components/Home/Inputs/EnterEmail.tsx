import { useState } from "react";
import InputField from "./InputFields";

interface Props {
  placeholder: string;
  buttonText: string;
}

const EnterEmail: React.FC<Props> = ({ buttonText, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className="pt-5" onSubmit={handleSubmit}>
      <div className="">
        <InputField
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => {
            handleInputChange(e);
            setInputValue(e.target.value);
          }}
          hasButton={true}
          buttonText={buttonText}
          type="email"
          name="email"
          error={error}
        />
      </div>
    </form>
  );
};
export default EnterEmail;

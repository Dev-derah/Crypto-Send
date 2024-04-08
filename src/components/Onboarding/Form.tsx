import {
  CustomButton,
  PostScript,
  Title,
} from "../Common";
import CustomInput from "../Common/Inputs/CustomTextInput";
import { useFormContext } from "../../context/LoginContext";
import arrow from "../../assets/Images/Icons/arrow-right.svg";
interface FormProps {
  title: string;
  name: string;
  buttonText: string;
  handleClick?: () => void;
  href?: string;
  to? : string;
  linkText?: string;
  linkColor?: string;
  normalText?: string;
  className?: string;
}

function OnboardingForm({
  title,
  name: inputName,
  buttonText,
  handleClick,
   to,
  linkText,
  normalText,
  linkColor,
  className,
}: FormProps) {
  const { formData, handleInputChange } = useFormContext();
  return (
    <div className={`w-full ${className} flex flex-col items-center gap-6 `}>
      <Title title={title} />
      <CustomInput
        value={formData[inputName]}
        name={inputName}
        placeholder={`enter your ${inputName} here`}
        type="text"
        onChange={handleInputChange}
        autoFocus={true}
      />
      
    
      <CustomButton
        disabled={!formData[inputName]}
        color={!formData[inputName] ? "text-white" : "text-black"}
        background="bg-primary"
        isFilled
        size="big"
        onClickFunction = {handleClick}
      >
        {buttonText}
      </CustomButton>
      
  
      <PostScript
    
        to = {to}
        linkText={linkText}
        normalText={normalText}
        linkColor={linkColor}
        className="pt-8"
        icon={arrow}
      />
    </div>
  );
}

export default OnboardingForm;

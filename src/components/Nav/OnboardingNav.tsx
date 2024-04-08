import { CustomButton } from "../Common";

interface navProps {
  type?: "center" | "wide";
}

function OnboardingNav({ type }: navProps) {
  const justify = type === "center" ? "justify-center" : "justify-between";
  return (
    <nav
      className={`w-full flex ${justify} 
    
    items-center pt-10 h-20 `}
    >
      <div className="">
        <img src="/src/assets/Images/brand/logo.svg" alt="" />
      </div>
      {type !== "center" && <CustomButton>Need help?</CustomButton>}
    </nav>
  );
}

export default OnboardingNav;

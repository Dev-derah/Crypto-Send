import Nav from "../../components/Nav/OnboardingNav";
import {
  Body,
  CenteredContainer,
} from "../../components/Layouts/StyledLayout";
import {useNavigate} from "react-router-dom";
import {
  CustomButton,
  PostScript
} from "../../components/Common";


function Welcome() {
const navigate = useNavigate();
  return (
    <>
    <Nav type = "center"/>
    <Body>
    <CenteredContainer>
    <div className = "pb-20">
    <h1 className = "font-semibold py-4 text-xl script-font">Welcome to our 
    <br /> Beta Version - </h1>
    <p className = "text-md text-neutral-8"> We are happy to have you onboard on our mission to globalizing crypto and bridging the gap between traditional finance and digital assets </p>
    </div>
    
      <CustomButton
        
        color={ "text-black"}
        background="bg-primary"
        isFilled
        size="big"
        onClickFunction = {() => navigate("get-started")}
      >
Get started
      </CustomButton>
      
      <PostScript
      href = "#"
        linkText={"Read guide to our beta version"}
        linkColor={"text-black"}
        className="pt-8"
        underline = {true}
      />
     </CenteredContainer>
    </Body>
    </>
    );
}

export default Welcome;

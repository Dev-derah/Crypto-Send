import Nav from "../../components/Nav/OnboardingNav";
import { useFormContext } from "../../context/LoginContext";
import { Form } from "../../components/Onboarding";
import {
  InnerPageWrapper,
  OuterPageContainer,
  Body,
  CenteredContainer,
} from "../../components/Layouts/StyledLayout";

function Login() {
  return (
    <OuterPageContainer>
      <InnerPageWrapper>
        <Nav />
        <Body>
          <CenteredContainer>
            <Form
              title="Welcome back, Log in here"
              name="email"
              buttonText="Log In"
              handleClick={() => console.log("navigate to dashboard")}
              to="signup"
              linkText="Create an account"
              normalText="Don’t have an account?"
              linkColor="text-secondary"
            />
          </CenteredContainer>
        </Body>
      </InnerPageWrapper>
    </OuterPageContainer>
  );
}

export default Login;

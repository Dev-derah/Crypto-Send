import styled from "styled-components";


//for main content under nav
export const Body = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
`;

//container for centralized body content
export const CenteredContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

//centralises the inner wrapper
//also for background color when inner wrapper is used
export const OuterPageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//gives padding on both sides
export const InnerPageWrapper = styled.div`
  width: 85%;
  max-width: 90%;
  min-height: 100vh;
  margin: 0 auto; /* Center the wrapper horizontally */
`;


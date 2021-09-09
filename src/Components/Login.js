import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogo1 src="/images/cta-logo-one.svg"></CTALogo1>
        <SignUp>Get All there</SignUp>
        <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 05/09/21, the price of Disney+ and the Disney Bundle will increase by $1.</Description>
        <CTALogo2 src="/images/cta-logo-two.png"></CTALogo2>
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: top;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.6;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const CTALogo1 = styled.img``;

const SignUp = styled.a`
  text-transform: uppercase;
  width: 100%;
  background-color: #0063e5;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1.8px;
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  text-align: center;
  letter-spacing: 1.2px;
  font-size: 10px;
  line-height: 1.5;
  font-weight: 100;
`;

const CTALogo2 = styled(CTALogo1)`
  margin-top: 12px;
  padding: 0 6px;
`;

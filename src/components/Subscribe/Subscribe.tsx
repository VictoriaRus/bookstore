import React from 'react';
import styled from "styled-components";
import Title from "../Title";
import SecondaryTitle from "../SecondaryTitle";
import Button from "../Button";
import Input from "../Input";
import Flex from "../../containers/Flex";

const StyledSubscribe = styled.div`
  padding: 56px 64px;
  background: #F4EEFD;
  @media ( max-width: 768px ) {
    padding: 40px;
  }
  @media ( max-width: 415px ) {
    padding: 24px;
  }
`;

const Subscribe = () => {
    return (
        <StyledSubscribe>
            <Title fontSize={ "40" }
                   lineHeight={ "60" }
                   mobileFontSize={ "28" }
                   mobileLineHeight={ "40" }
                   marginBottom={ "0" }
                   mobileMarginBottom={ "14" }>
                Subscribe to Newsletter
            </Title>
            <SecondaryTitle>
                Be the first to know about new IT books, upcoming releases, exclusive offers and more.
            </SecondaryTitle>
            <Flex mobileFlexDirection={ "column" }>
                <Input width={ "auto" } placeholder="Your email"/>
                <Button width={ "169" } mobileWidth={ "148" }>
                    Subscribe
                </Button>
            </Flex>
        </StyledSubscribe>
    )
}

export default Subscribe;
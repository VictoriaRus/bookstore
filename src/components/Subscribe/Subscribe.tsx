import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Title from "../common-components/Title/Title";
import SecondaryTitle from "../common-components/SecondaryTitle/SecondaryTitle";
import Button from "../common-components/Button/Button";
import Input from "../common-components/Input/Input";
import Flex from "../common-components/Flex/Flex";

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
    const [text, setText] = useState("");

    const onTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }, []);

    return (
        <StyledSubscribe>
            <Title fontSize="40" lineHeight="60" mobileFontSize="28" mobileLineHeight="40" marginBottom="0" mobileMarginBottom="14">
                Subscribe to Newsletter
            </Title>
            <SecondaryTitle>
                Be the first to know about new IT books, upcoming releases, exclusive offers and more.
            </SecondaryTitle>
            <Flex mobileFlexDirection="column">
                <Input width="auto" placeholder="Your email" value={ text } onChange={ onTextChange }/>
                <Button width="169" mobileWidth="148" text="Subscribe"/>
            </Flex>
        </StyledSubscribe>
    )
}

export default React.memo(Subscribe);
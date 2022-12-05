import React from "react";
import styled from "styled-components";
import Container from "../../Container/Container";
import Flex from "../../Flex/Flex";

const StyledFooter = styled.div`
  padding: 35px 0;
`;

const StyledFooterInfo = styled.div`
  font-size: 16px;
  line-height: 150%;
  color: #A8A8A8;
`;

const FlexFooter = styled(Flex)`
  position: relative;

  &::before {
    content: "";
    height: 1px;
    width: 100%;
    background-color: #E7E7E7;
    display: block;
    position: absolute;
    top: -35px;
    left: 0;
  }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexFooter>
                    <StyledFooterInfo>&#169; 2022 Bookstore</StyledFooterInfo>
                    <StyledFooterInfo>All rights reserved</StyledFooterInfo>
                </FlexFooter>
            </Container>
        </StyledFooter>
    );
}

export default React.memo(Footer);
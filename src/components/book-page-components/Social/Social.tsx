import React from "react";
import Facebook from "../../../assets/icons/facebook.svg";
import Twitter from "../../../assets/icons/twitter.svg";
import More from "../../../assets/icons/more-horizontal.svg";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
`;

const Social = () => {
    return (
        <Wrap>
            <img src={ Facebook } alt="facebook"/>
            <img src={ Twitter } alt="twitter"/>
            <img src={ More } alt="more"/>
        </Wrap>
    );
};

export default React.memo(Social);
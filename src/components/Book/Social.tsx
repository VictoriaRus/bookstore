import React from 'react';
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import More from "../../assets/icons/more-horizontal.svg";
import styled from "styled-components";

const ImgWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
`;

const Social = () => {
    return (
        <ImgWrap>
            <img src={ Facebook }/>
            <img src={ Twitter }/>
            <img src={ More }/>
        </ImgWrap>
    );
};

export default React.memo(Social);
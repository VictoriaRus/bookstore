import React from 'react';
import IconArrowLeft from "../../assets/icons/Icon-Arrow-Left.svg";
import styled from "styled-components";
import { useNavigate } from "react-router";

const IconArrow = styled.img`
  margin-bottom: 37px;
  cursor: pointer;
`;

const Back = () => {
    const navigate = useNavigate();
    const Redirect = () => {
        navigate(`/main`);
    }

    return (
        <IconArrow src={ IconArrowLeft } onClick={ Redirect }/>
    );
};

export default React.memo(Back);
import React from "react";
import IconArrowLeft from "../../../assets/icons/Icon-Arrow-Left.svg";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Arrow = styled.img`
  margin-bottom: 37px;
  cursor: pointer;
`;

const Back = () => {
    const navigate = useNavigate();
    const redirect = () => {
        navigate(`/main`);
    }

    return (
        <Arrow src={ IconArrowLeft } onClick={ redirect }/>
    );
};

export default React.memo(Back);
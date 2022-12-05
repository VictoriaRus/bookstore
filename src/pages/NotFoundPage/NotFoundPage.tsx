import React from "react";
import styled from "styled-components";

const NotFoundStyled = styled.div`
  margin-top: 50px;
  text-align: center;
  font-size: 20px;
`;

const NotFoundPage = () => {
    return (
        <NotFoundStyled>Sorry, this page is not found...</NotFoundStyled>
    );
};

export default NotFoundPage;
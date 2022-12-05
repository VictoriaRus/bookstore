import React from "react";
import Star from "../../../assets/icons/StarDis.png";
import styled from "styled-components";
import { STARS } from "../../../mock-data/constants";

const ImgStar = styled.img`
  margin-right: 10px;
`;

const Stars = () => {
    return (
        <div>
            {
                STARS.map(item => <ImgStar key={ item } src={ Star } alt={ `${ item }` }/>)
            }
        </div>
    );
};

export default React.memo(Stars);
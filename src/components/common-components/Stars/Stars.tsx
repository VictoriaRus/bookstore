import React from 'react';
import Star from "../../../assets/icons/StarDis.png";
import styled from "styled-components";

const ImgStar = styled.img`
  margin-right: 10px;
`;

const stars = [1, 2, 3, 4, 5];

const Stars = () => {
    return (
        <div>
            {
                stars.map(item => <ImgStar key={item} src={Star} alt={`${item}`}/>)
            }
        </div>
    );
};

export default React.memo(Stars);
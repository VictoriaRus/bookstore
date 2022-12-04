import React, {useMemo} from "react";
import styled from "styled-components";

interface ICardBookStyle {
    color: string;
}

const COLORS = ['#D7E4FD', '#CAEFF0', '#F4EEFD', '#FEE9E2'];

const getColor = () => {
    return Math.floor(Math.random() * COLORS.length);
}

const BackgroundBook = styled.div<ICardBookStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.color || '#D7E4FD'};
  //margin-bottom: 20px;
`;

const ImgBook = styled.img`
  width: 226px;
  @media ( max-width: 768px ) {
    width: 210px;
  }
  @media ( max-width: 415px ) {
    width: 174px;
  }
`;

interface IPhotoProps {
    image: string;
}

const Photo = ({ image }: IPhotoProps) => {
    return (
        <BackgroundBook color={ COLORS[getColor()] }>
            <ImgBook src={ image }/>
        </BackgroundBook>
    );
};

export default React.memo(Photo);
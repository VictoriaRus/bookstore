import React, {useState} from 'react';
import styled from "styled-components";
import BurgerIcon from '../../../assets/icons/Burger.svg';
import {INavTabletProps} from "../NavTablet";

const StyledBurger = styled.img`
  padding-bottom: 5.6px;
  cursor: pointer;
`;

const Burger = (props: INavTabletProps) => {
    const [isShow, setIsShow] = useState(true);
    return (
        <StyledBurger src={BurgerIcon} onClick={() => {
            props.onBurger(isShow);
        }}/>
    )
}

export default Burger;
import React from "react";
import styled from "styled-components";
import BurgerIcon from "../../../../assets/icons/Burger.svg";
import Close from "../../../../assets/icons/close.svg";

const ImgBurger = styled.img`
  padding-bottom: 5.6px;
  cursor: pointer;
  z-index: 2000;
`;

export interface IBurgerProps{
    handledBurger: () => void;
    active: boolean;
}

const Burger = ({ handledBurger, active }: IBurgerProps) => {
    const handledIsOpen = () => {
        handledBurger();
    }

    return (
        <ImgBurger src={ active ? Close : BurgerIcon } onClick={ handledIsOpen }/>
    )
}

export default React.memo(Burger);

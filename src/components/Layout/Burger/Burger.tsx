import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import styled from "styled-components";
import BurgerIcon from '../../../assets/icons/Burger.svg';
import Close from "../../../assets/icons/close.svg";

const StyledBurger = styled.img`
  padding-bottom: 5.6px;
  cursor: pointer;
  z-index: 2000;
`;

 export interface IBurgerProps{
    handledBurger: () => void;
}

const Burger = ({ handledBurger }:IBurgerProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const handledIsOpen = () => {
        setIsOpen(prevState => !prevState);
        handledBurger();
    }
       return (
        <StyledBurger src={ isOpen ? Close : BurgerIcon } onClick={ handledIsOpen }/>
    )
}

export default React.memo(Burger);

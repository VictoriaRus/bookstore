import React from 'react';
import styled from "styled-components";
import BurgerIcon from '../assets/icons/Burger.svg';

const StyledBurger = styled.img`
  display: none;
  padding-bottom: 5.6px;
  
  @media ( max-width: 906px ) {
    display: block;
  }

`;

const Burger = ( ) => {
    return (
        <StyledBurger src={ BurgerIcon }/>
    )
}

export default Burger;
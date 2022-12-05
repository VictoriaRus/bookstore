import React from 'react';
import { Link } from "react-router-dom";
import Burger, { IBurgerProps } from "../../Burger/Burger";
import Flex from "../../../Flex/Flex";
import Bag from "../../../../../assets/icons/Bag.svg";
import { StyledIcon } from "../NavDesktop/NavDesktop";
import Logo from "../../../Logo/Logo";

const NavTablet = ({ handledBurger }:IBurgerProps) => {

    return (
        <>
            <Link to="/">
                <Logo>BOOKSTORE</Logo>
            </Link>
            <Flex>
                <Link to="/cart">
                    <StyledIcon src={ Bag } />
                </Link>
                <Burger handledBurger={ handledBurger } />
            </Flex>
        </>
    );
};

export default React.memo(NavTablet);
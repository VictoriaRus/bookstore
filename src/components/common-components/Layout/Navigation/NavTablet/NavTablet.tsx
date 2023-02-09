import React from 'react';
import { Link } from "react-router-dom";
import Burger from "../../Burger/Burger";
import Flex from "../../../Flex/Flex";
import Bag from "../../../../../assets/icons/Bag.svg";
import { StyledIcon } from "../NavDesktop/NavDesktop";
import Logo from "../../../Logo/Logo";

interface IProps{
    handledBurger: () => void;
    active: boolean;
}

const NavTablet = ({ handledBurger, active }: IProps) => {

    return (
        <>
            <Link to="/">
                <Logo>BOOKSTORE</Logo>
            </Link>
            <Flex>
                <Link to="/cart">
                    <StyledIcon src={ Bag } />
                </Link>
                <Burger handledBurger={ handledBurger } active={ active }/>
            </Flex>
        </>
    );
};

export default React.memo(NavTablet);
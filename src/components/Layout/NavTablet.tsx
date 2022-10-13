import React from 'react';
import {Link} from "react-router-dom";
import Burger from "./Burger/Burger";
import Flex from "../../containers/Flex";
import Bag from "../../assets/icons/Bag.svg";
import {StyledIcon} from "./NavDesktop";
import Logo from "../Logo";

 export interface INavTabletProps{
    onBurger: (value: boolean)=>void;
}

const NavTablet = (props:INavTabletProps) => {
    return (
        <>
            <Link to="/">
                <Logo>BOOKSTORE</Logo>
            </Link>
            <Flex>
                <Link to="/cart">
                    <StyledIcon src={Bag}/>
                </Link>
                <Burger onBurger={props.onBurger}/>
            </Flex>
        </>
    );
};

export default NavTablet;
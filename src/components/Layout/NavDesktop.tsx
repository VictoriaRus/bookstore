import React from 'react';
import Search from "../common-components/Search";
import Flex from "../common-components/Flex";
import { Link } from "react-router-dom";
import Bag from "../../assets/icons/Bag.svg";
import Like from "../../assets/icons/Like.svg";
import User from "../../assets/icons/User.svg";
import styled from "styled-components";
import Logo from "../common-components/Logo";

export const StyledIcon = styled.img`
  padding-right: 8px;

  &:last-child {
    padding-right: 0;
  }
`;

const NavDesktop = () => {
    return (
        <>
            <Link to="/">
                <Logo>BOOKSTORE</Logo>
            </Link>
            <Search placeholder="Search"/>
            <Flex>
                <Link to="/cart">
                    <StyledIcon src={ Bag } alt="bag"/>
                </Link>
                <Link to="/favorites">
                    <StyledIcon src={ Like } alt="like"/>
                </Link>
                <Link to="/account">
                    <StyledIcon src={ User } alt="user"/>
                </Link>
            </Flex>
        </>
    );
};

export default NavDesktop;
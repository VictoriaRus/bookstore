import React from "react";
import Search from "../../../Search/Search";
import Flex from "../../../Flex/Flex";
import { Link } from "react-router-dom";
import Bag from "../../../../../assets/icons/Bag.svg";
import Like from "../../../../../assets/icons/LikeIcon.svg";
import AddLike from "../../../../../assets/icons/AddLike.svg";
import User from "../../../../../assets/icons/User.svg";
import styled from "styled-components";
import Logo from "../../../Logo/Logo";
import {useAppSelector} from "../../../../../redux/hooks/hooks";
import {favoriteBooksSelector} from "../../../../../redux/selectors/favoritesSelector/favoritesSelector";

export const StyledIcon = styled.img`
  padding-right: 8px;

  &:last-child {
    padding-right: 0;
  }
`;

const NavDesktop = () => {
    const books = useAppSelector(favoriteBooksSelector);

    return (
        <>
            <Link to="/">
                <Logo>BOOKSTORE</Logo>
            </Link>
            <Search placeholder="Search"/>
            <Flex>
                <Link to="/favorites">
                    { books.length > 0 ? <StyledIcon src={ AddLike } alt="AddLike"/> : <StyledIcon src={ Like } alt="like"/> }
                </Link>
                <Link to="/cart">
                    <StyledIcon src={ Bag } alt="bag"/>
                </Link>
                <Link to="/account">
                    <StyledIcon src={ User } alt="user"/>
                </Link>
            </Flex>
        </>
    );
};

export default React.memo(NavDesktop);
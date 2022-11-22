import React from 'react';
import Search from "../../common-components/Search";
import { Link } from "react-router-dom";
import Title from "../../common-components/Title";
import Button from "../../common-components/Button";
import styled from "styled-components";
import Logo from "../../common-components/Logo";
import Bag from "../../../assets/icons/Bag.svg";
import { StyledIcon } from "../NavDesktop";

const MenuStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding: 24px 15px 56px;
  background-color: #FFFFFF;;
  width: 100%;
  height: 100vh;
  z-index: 50;
`;

const CloseWrapStyled = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
  padding-bottom: 24px;
  margin-bottom: 56px;
  position: relative;

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: #E7E7E7;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const LinksStyled = styled.div`
  padding-top: 48px;
  text-align: center;
`;

const MenuBurgerMobile = () => {
    return (
        <MenuStyled>
            <div>
                <CloseWrapStyled>
                    <Link to="/">
                        <Logo>BOOKSTORE</Logo>
                    </Link>
                    <div>
                        <Link to="/cart">
                            <StyledIcon src={ Bag } alt="bag"/>
                        </Link>
                    </div>
                </CloseWrapStyled>
                <Search width="287" placeholder="Search"/>
                <LinksStyled>
                    <Link to="/cart">
                        <Title mobileFontSize="32" mobileMarginBottom="48">Favorites</Title>
                    </Link>
                    <Link to="/favorites">
                        <Title mobileFontSize="32">Cart</Title>
                    </Link>
                </LinksStyled>
            </div>
            <Button mobileWidth="288" text="log out"/>
        </MenuStyled>
    );
};

export default React.memo(MenuBurgerMobile);
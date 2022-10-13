import React, {useState} from 'react';
import Close from "../../../assets/icons/close.svg";
import Search from "../../Search";
import {Link} from "react-router-dom";
import Title from "../../common-components/Title";
import Button from "../../Button";
import styled from "styled-components";
import Logo from "../../Logo";
import Bag from "../../../assets/icons/Bag.svg";
import {StyledIcon} from "../NavDesktop";
import {INavTabletProps} from "../NavTablet";

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

const MenuBurgerMobile = (props: INavTabletProps) => {
    const [isShow, setIsShow] = useState(false);
    return (
        <MenuStyled>
            <div>
                <CloseWrapStyled>
                    <Link to="/">
                        <Logo>BOOKSTORE</Logo>
                    </Link>
                    <div>
                        <Link to="/cart">
                            <StyledIcon src={Bag} alt="bag"/>
                        </Link>

                        <img src={Close} alt="close" onClick={() => {
                            props.onBurger(isShow);
                        }}/>

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

            <Button mobileWidth="288">log out</Button>

        </MenuStyled>
    );
};

export default MenuBurgerMobile;
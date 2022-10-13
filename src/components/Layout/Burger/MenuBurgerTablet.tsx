import React, {useState} from 'react';
import styled from "styled-components";
import Button from "../../Button";
import {Link} from "react-router-dom";
import Title from "../../common-components/Title";
import Search from "../../Search";
import Close from "../../../assets/icons/close.svg";
import {INavTabletProps} from "../NavTablet";

const BackStyled = styled.div`
  position: absolute;
  background-color: rgba(49, 48, 55, 0.5);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
`;

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding: 24px 40px 56px;
  background-color: #FFFFFF;;
  width: 368px;
  height: 100vh;
  position: absolute;
  right: 0;
`;

const CloseWrapStyled = styled.div`
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

const MenuBurgerTablet = (props: INavTabletProps) => {
    const [isShow, setIsShow] = useState(false);
    return (
        <BackStyled>
            <MenuStyled>
                <div>
                    <CloseWrapStyled>

                        <img src={Close} alt="close" onClick={() => {
                            props.onBurger(isShow);
                        }}/>

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
        </BackStyled>
    );
};

export default MenuBurgerTablet;
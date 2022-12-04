import React from "react";
import styled from "styled-components";
import Button from "../../../common-components/Button/Button";
import { Link } from "react-router-dom";
import Title from "../../../common-components/Title/Title";
import Search from "../../../common-components/Search/Search";
import { useAppSelector } from "../../../../redux/hooks/hooks";
import { isAuthSelector } from "../../../../redux/selectors/authSelector/authSelector";

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

const BurgerHeader = styled.div`
  text-align: right;
  padding-bottom: 85px;
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

const Links = styled.div`
  padding-top: 48px;
  text-align: center;
`;

const MenuBurgerTablet = () => {
    const isAuth = useAppSelector(isAuthSelector);

    return (
        <BackStyled>
            <MenuStyled>
                <div>
                    <BurgerHeader/>
                    <Search width="287" placeholder="Search"/>
                    { isAuth &&
                        <Links>
                            <Link to="/favorites">
                                <Title mobileFontSize="32" mobileMarginBottom="48">Favorites</Title>
                            </Link>
                            <Link to="/cart">
                                <Title mobileFontSize="32">Cart</Title>
                            </Link>
                        </Links>
                    }
                </div>
                { isAuth ? <Button mobileWidth="288" text="log out" /> : <Button mobileWidth="288" text="sign in" /> }
            </MenuStyled>
        </BackStyled>
    );
};

export default React.memo(MenuBurgerTablet);
import React, { useCallback, useEffect } from "react";
import Search from "../../../Search/Search";
import { Link } from "react-router-dom";
import Title from "../../../Title/Title";
import Button from "../../../Button/Button";
import styled from "styled-components";
import Logo from "../../../Logo/Logo";
import Bag from "../../../../../assets/icons/Bag.svg";
import { StyledIcon } from "../../Navigation/NavDesktop/NavDesktop";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks/hooks";
import { authActionCreators } from "../../../../../redux/actions/authActionCreators/authActionCreators";
import { isAuthSelector } from "../../../../../redux/selectors/authSelector/authSelector";

const Menu = styled.div`
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

const CloseWrap = styled.div`
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

const Links = styled.div`
  padding-top: 48px;
  text-align: center;
`;

const MenuBurgerMobile = () => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(isAuthSelector);

    const onLogout = useCallback(() => {
        dispatch(authActionCreators.logout());
    }, [dispatch]);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

    return (
        <Menu>
            <div>
                <CloseWrap>
                    <Link to="/">
                        <Logo>BOOKSTORE</Logo>
                    </Link>
                    <div>
                        <Link to="/cart">
                            <StyledIcon src={ Bag } alt="bag"/>
                        </Link>
                    </div>
                </CloseWrap>
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
            { isAuth ? <Button mobileWidth="288" onClick={ onLogout } text="log out" /> :
                <Link to="/sign-in">
                    <Button mobileWidth="288" text="sign in" />
                </Link>
            }
        </Menu>
    );
};

export default React.memo(MenuBurgerMobile);
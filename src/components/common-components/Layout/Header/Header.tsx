import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Container from "../../Container/Container";
import Flex from "../../Flex/Flex";
import useWindowSize from "../../../../hooks/useWindowSize/useWindowSize";
import NavDesktop from "../Navigation/NavDesktop/NavDesktop";
import NavTablet from "../Navigation/NavTablet/NavTablet";
import MenuBurgerTablet from "../Burger/MenuBurgerTablet/MenuBurgerTablet";
import MenuBurgerMobile from "../Burger/MenuBurgerMobile/MenuBurgerMobile";
import { useLocation } from "react-router";
import { useAppSelector } from "../../../../redux/hooks/hooks";
import { filterBooksSelector } from "../../../../redux/selectors/booksSelector/booksSelector";

const StyledHeader = styled.div`
  position: relative;
  padding: 24px 0;
`;

const FlexHeader = styled(Flex)`
  position: relative;

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: #E7E7E7;
    display: block;
    position: absolute;
    bottom: -24px;
    left: 0;
  }
`;

const Header = () => {
    const size = useWindowSize();
    const location = useLocation();
    const [isOpenMenu, setIsOpenMenu] = useState(true);

    const filter = useAppSelector(filterBooksSelector);

    useEffect(() => {
        setIsOpenMenu(false);
    }, [location, filter]);

    const handledBurger = () => {
        setIsOpenMenu(prevState => !prevState);
    }

    return (
        <StyledHeader>
            <Container>
                <FlexHeader>
                    {
                        size.width > 768 ? <NavDesktop /> : <NavTablet handledBurger={ handledBurger } />
                    }
                </FlexHeader>
            </Container>
            { isOpenMenu &&
                (size.width > 414 ? <MenuBurgerTablet /> : <MenuBurgerMobile />)
            }
        </StyledHeader>
    );
}

export default React.memo(Header);
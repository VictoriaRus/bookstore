import React, {useState} from 'react';
import styled from "styled-components";
import Container from "../../containers/Container";
import Flex from "../../containers/Flex";
import useWindowSize from "../../hooks/useWindowSize";
import NavDesktop from "./NavDesktop";
import NavTablet from "./NavTablet";
import MenuBurgerTablet from "./Burger/MenuBurgerTablet";
import MenuBurgerMobile from "./Burger/MenuBurgerMobile";

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
    const [isShow, setIsShow] = useState(false);
    const onBurger = (value: boolean) => {
        setIsShow(value);
    }
    return (
        <StyledHeader>
            <Container>
                <FlexHeader>
                    {
                        size.width > 768 ? <NavDesktop/> : <NavTablet onBurger={onBurger}/>
                    }
                </FlexHeader>
            </Container>
            {
                isShow && <>
                    {
                        size.width > 414 ? <MenuBurgerTablet onBurger={onBurger}/> : <MenuBurgerMobile onBurger={onBurger}/>
                    }
                </>
            }
        </StyledHeader>
    );
}

export default Header;
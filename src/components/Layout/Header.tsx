import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import Search from "../Search";
import Container from "../../containers/Container";
import Flex from "../../containers/Flex";
import Logo from "../Logo";

import Bag from '../../assets/icons/Bag.svg';
import Like from '../../assets/icons/Like.svg';
import User from '../../assets/icons/User.svg';
import Burger from "../Burger";

const StyledHeader = styled.div`
  padding: 24px 0;
`;

const StyledIcon = styled.img`
  padding-right: 8px;

  &:last-child {
    padding-right: 0;
  }
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
    top: 84px;
    left: 0;
  }
`;

const Nav = styled(Flex)`
  @media ( max-width: 906px ) {
    display: none;
  }
`;

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexHeader>
                    <Link to="/"><Logo>BOOKSTORE</Logo></Link>
                    <Nav><Search placeholder="Search"/></Nav>
                    <Flex>
                        <Link to="/cart"><StyledIcon src={ Bag }/></Link>
                        <Nav>
                            <Link to="/favorites"><StyledIcon src={ Like }/></Link>
                            <Link to="/account"><StyledIcon src={ User }/></Link>
                        </Nav>
                        <Link to="/"><Burger/></Link>
                    </Flex>
                </FlexHeader>
            </Container>
        </StyledHeader>
    );
}

export default Header;
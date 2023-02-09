import React, { useEffect, useRef, useState } from "react";
import Photo from "../../common-components/Photo/Photo";
import { Link } from "react-router-dom";
import Title from "../../common-components/Title/Title";
import SecondaryTitle from "../../common-components/SecondaryTitle/SecondaryTitle";
import Flex from "../../common-components/Flex/Flex";
import styled from "styled-components";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { cartActionCreators } from "../../../redux/actions/cartActionsCreators/cartActionsCreators";
import IconDel from "./IconDel/IconDel";
import Counter from "../Counter/Counter";
import { IBookCart, IProduct } from "../../../types/cartTypes/cartTypes";

const ColCart = styled.div`
  width: 256px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const InfoCart = styled.div`
  flex-grow: 1;
  padding: 32px;
`;

const WrapCart = styled.div`
  padding: 48px 0;
  position: relative;

  &:nth-child(1) {
    padding-top: 0;
  }

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

const ItemCart = ({ title, subtitle, image, price, count, isbn13 }: IBookCart) => {
    const dispatch = useAppDispatch();

    const [bookCart, setBookCart] = useState<IProduct>({
        id: isbn13,
        booksCount: count,
        bookPrice: +price.slice(1),
        booksCost: +price.slice(1) * count,
    });

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        dispatch(cartActionCreators.changeCountBookCart(bookCart));
    }, [dispatch, bookCart]);

    const delBook = () => {
        dispatch(cartActionCreators.deleteBookFromCart(bookCart.id));
    }

    const increase = () => {
        setBookCart(bookCart => {
            return {
                ...bookCart,
                booksCount: ++bookCart.booksCount,
                booksCost: +(bookCart.booksCount * bookCart.bookPrice).toFixed(2),
            }
        });
    }

    const decrease = () => {
        setBookCart(bookCart => {
            return {
                ...bookCart,
                booksCount: --bookCart.booksCount,
                booksCost: +(bookCart.booksCount * bookCart.bookPrice).toFixed(2),
            }
        });
    }

    return (
        <WrapCart>
            <Flex>
                <ColCart>
                    <Photo image={ image }/>
                </ColCart>
                <InfoCart>
                    <Link to={ `/book/${bookCart.id }`}>
                        <Title fontSize="24" lineHeight="32" mobileFontSize="24" mobileLineHeight="32" marginBottom="8">
                            { title }
                        </Title>
                    </Link>
                    <SecondaryTitle>{ subtitle }</SecondaryTitle>
                    <Counter count={ bookCart.booksCount } increase={ increase } decrease={ decrease } />
                </InfoCart>
                <ColCart>
                    <Title fontSize="40" lineHeight="32" mobileFontSize="24" mobileLineHeight="32"
                           marginBottom="0" mobileMarginBottom="0">
                        { bookCart.booksCost }
                    </Title>
                    <IconDel onClick={ delBook }/>
                </ColCart>
            </Flex>
        </WrapCart>
    );
};

export default ItemCart;
import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Button from "../../common-components/Button/Button";
import Title from "../../common-components/Title/Title";
import SecondaryTitle from "../../common-components/SecondaryTitle/SecondaryTitle";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/hooks";
import {booksCartSelector, cartSelector} from "../../../redux/selectors/cartSelector/cartSelector";
import {IBookForCart} from "../../../redux/reducers/cartReducer/cartReducer";
import {IOder} from "../../../types/cartTypes/cartTypes";
import {cartActionCreators} from "../../../redux/actions/cartActionsCreators/cartActionsCreators";
import useStateCallback from "../../../hooks/useStateCallback/useStateCallback";

const Wrapper = styled.div`
  width: 256px;
  margin-top: 48px;
  margin-left: auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Cost = styled.div`
  font-family: "Helios", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const Oder = () => {
    const dispatch = useAppDispatch();
    const books = useAppSelector(booksCartSelector);
    const cart = useAppSelector(cartSelector);

    const [oder, setOder] = useStateCallback<IOder>({
        sumTotal: cart.sumTotal,
        vat: cart.vat,
        total: cart.total,
    });

    useEffect(() => {
        let sum: number = (books as any[]).reduce((acc: number, item: IBookForCart) => {
            return acc + item.booksCost;
        }, 0);
        let percent = sum * 10 / 100;
        let all = percent + sum;

        setOder(
            {
                ...oder,
                sumTotal: +sum.toFixed(2),
                vat: +percent.toFixed(2),
                total: +all.toFixed(2),
            }, oder => {
                dispatch(cartActionCreators.changeOder(oder))
            });

    }, [books]);

    return (
        <Wrapper>
            <Row>
                <SecondaryTitle>Sum total</SecondaryTitle>
                <Cost>$ {oder.sumTotal}</Cost>
            </Row>
            <Row>
                <SecondaryTitle>VAT</SecondaryTitle>
                <Cost>$ {oder.vat}</Cost>
            </Row>
            <Row>
                <Title fontSize="40" marginBottom="24">Total</Title>
                <Title fontSize="40" marginBottom="24">${oder.total}</Title>
            </Row>
            <Button text="CHECK OUT" width="256" mobileWidth="272" disabled={oder.total === 0}/>
        </Wrapper>
    );
};

export default Oder;
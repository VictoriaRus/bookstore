import React from "react";
import Section from "../../components/common-components/Section/Section";
import Container from "../../components/common-components/Container/Container";
import Title from "../../components/common-components/Title/Title";
import Back from "../../components/common-components/Back/Back";
import ListCart from "../../components/cart-page-components/ListCart/ListCart";
import Oder from "../../components/cart-page-components/Order/Oder";

const CartPage = () => {
    return (
        <>
            <Section>
                <Container>
                    <Back />
                    <Title>Your cart</Title>
                    <ListCart />
                    <Oder />
                </Container>
            </Section>
        </>
    );
}

export default CartPage;
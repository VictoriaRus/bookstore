import React from "react";
import Section from "../../components/common-components/Section/Section";
import Container from "../../components/common-components/Container/Container";
import Title from "../../components/common-components/Title/Title";
import Back from "../../components/Book/Back/Back";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import SimilarBooks from "../../components/Book/SimilarBooks/SimilarBooks";

const FavoritesPage = () => {
    return (
        <>
            <Section>
                <Container>
                    <Back />
                    <Title marginBottom='0' mobileMarginBottom='0'>Favorites page</Title>
                    <FavoriteList/>
                </Container>
            </Section>
            <Container>
                <Title fontSize="40" lineHeight="60">Popular Books</Title>
                <SimilarBooks/>
            </Container>
        </>
    );
}

export default FavoritesPage;
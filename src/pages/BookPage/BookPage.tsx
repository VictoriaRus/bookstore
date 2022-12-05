import React from "react";
import Section from "../../components/common-components/Section/Section";
import Container from "../../components/common-components/Container/Container";
import { useParams } from "react-router";
import Subscribe from "../../components/common-components/Subscribe/Subscribe";
import Book from "../../components/book-page-components/Book/Book";
import Social from "../../components/book-page-components/Social/Social";
import SimilarBooks from "../../components/common-components/SimilarBooks/SimilarBooks";
import Title from "../../components/common-components/Title/Title";

const BookPage = () => {
    const { isbn13 } = useParams();

    return (
        <>
            <Section>
                <Container>
                    <Book isbn13={ isbn13 } />
                </Container>
            </Section>
            <Container>
                <Social />
            </Container>
            <Section>
                <Container>
                    <Subscribe />
                </Container>
            </Section>
            <Container>
                <Title fontSize="40" lineHeight="60">Similar Books</Title>
                <SimilarBooks />
            </Container>
        </>
    );
}

export default BookPage;
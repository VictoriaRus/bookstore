import React from 'react';
import Section from "../components/common-components/Section";
import Container from "../components/common-components/Container";
import { useParams } from "react-router";
import Subscribe from "../components/Subscribe/Subscribe";
import Book from "../components/Book/Book";
import Social from "../components/Book/Social";
import SimilarBooks from "../components/Book/SimilarBooks";

const BookPage = () => {
    const { isbn13 } = useParams();
    return (
        <>
            <Section>
                <Container>
                    <Book isbn13={ isbn13 }/>
                </Container>
            </Section>
            <Container>
                <Social/>
            </Container>
            <Section>
                <Container>
                    <Subscribe/>
                </Container>
            </Section>
                <Container>
                    <SimilarBooks/>
                </Container>
        </>
    );
}

export default BookPage;
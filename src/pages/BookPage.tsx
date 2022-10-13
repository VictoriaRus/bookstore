import React from 'react';
import Section from "../containers/Section";
import Container from "../containers/Container";
import { useParams } from "react-router";
import Subscribe from "../components/Subscribe/Subscribe";
import Book from "../components/Book/Book";

const BookPage = () => {
    const { isbn13 } = useParams();
    return (
        <>
            <Section>
                <Container>
                    <Book isbn13={ isbn13 }/>
                </Container>
            </Section>
            <Section>
                <Container>
                    <Subscribe/>
                </Container>
            </Section>
        </>
    );
}

export default BookPage;
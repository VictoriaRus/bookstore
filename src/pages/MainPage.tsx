import React, {useEffect, useState} from 'react';
import Section from "../containers/Section";
import Container from "../containers/Container";
import Title from "../components/Title";
import Subscribe from "../components/Subscribe/Subscribe";
import BooksList from "../components/BooksList/BooksList";
import NavPages from "../components/BooksList/NavPages";

interface IBooksState {
    title: string;
    image: string;
    price: string;
    subtitle: string;
    isbn13: number;
    url?: string;
}

const MainPage = () => {
    const [books, setBooks] = useState<IBooksState[]>([]);
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/search/word-to-search/${ activePage }`)
            .then(response => response.json())
            .then(data => {
                setBooks(data.books);
                setActivePage(data.page);
            })
    }, [activePage])

    const updateData = (activePage: number) => {
        setActivePage(activePage);
    }
    return (
        <>
            <Section>
                <Container>
                    <Title>New Releases Books</Title>
                    <BooksList books={ books }/>
                </Container>
            </Section>
            <Container>
                <NavPages updateData={ updateData } activePage={ activePage }/>
            </Container>
            <Section>
                <Container>
                    <Subscribe/>
                </Container>
            </Section>
        </>
    );
}

export default MainPage;
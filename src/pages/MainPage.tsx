import React, {useEffect, useState} from 'react';
import Section from "../components/common-components/Section";
import Container from "../components/common-components/Container";
import Title from "../components/common-components/Title";
import Subscribe from "../components/Subscribe/Subscribe";
import BooksList from "../components/BooksList/BooksList";
import NavPages from "../components/BooksList/NavPages";
import {useAppDispatch, useAppSelector} from "../redux/hooks/hooks";
import {booksSelector} from "../redux/selectors/booksSelector/booksSelector";
import {getAsyncBooks} from "../redux/actions/booksActionsCreators/booksActionsCreators";

interface IBooksState {
    title: string;
    image: string;
    price: string;
    subtitle: string;
    isbn13: number;
    url?: string;
}

const MainPage = () => {
    const books = useAppSelector(booksSelector); //получаем книги из store
    const dispatch = useAppDispatch();

    //const [books, setBooks] = useState<IBooksState[]>([]);
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        dispatch(getAsyncBooks())
    }, [])

/*
    const url = 'https://api.itbook.store/1.0/search/word-to-search/';

    useEffect(() => {
        fetch(`${url}${ activePage }`)
            .then(response => response.json())
            .then(data => {
                setBooks(data.books);
                setActivePage(data.page);
            })
    }, [activePage])
*/
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
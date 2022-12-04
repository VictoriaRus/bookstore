import React, {useEffect} from 'react';
import Section from "../../components/common-components/Section/Section";
import Container from "../../components/common-components/Container/Container";
import Title from "../../components/common-components/Title/Title";
import Subscribe from "../../components/Subscribe/Subscribe";
import BooksList from "../../components/BooksList/BooksList";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {
    booksSelector,
    filterBooksSelector, isLoadingAutBooksSelector,
    pageCountBooksSelector, totalBooksSelector
} from "../../redux/selectors/booksSelector/booksSelector";
import {booksActionCreators} from "../../redux/actions/booksActionsCreators/booksActionsCreators";
import Pagination from "../../components/common-components/Pagination/Pagination";
import SecondaryTitle from "../../components/common-components/SecondaryTitle/SecondaryTitle";

const MainPage = () => {
    const dispatch = useAppDispatch();

    const books = useAppSelector(booksSelector);
    const isLoading = useAppSelector(isLoadingAutBooksSelector);
    const pageCount = useAppSelector(pageCountBooksSelector);
    const filter = useAppSelector(filterBooksSelector);
    const totalBooks = useAppSelector(totalBooksSelector);


    useEffect(() => {
        dispatch(booksActionCreators.getBooks());
    }, [dispatch]);

    return (
        <>
            <Section>
                <Container>
                    {!!filter ? (<>
                        <Title marginBottom='32'>‘{filter}’ Search results</Title>
                        <SecondaryTitle>Found {totalBooks} books</SecondaryTitle>
                    </>) : <Title>New Releases Books</Title>}
                    {!isLoading ? <BooksList books={books}/> : <div>Loading...</div>}
                </Container>
            </Section>
            <Container>
                {!!pageCount && <Pagination/>}
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
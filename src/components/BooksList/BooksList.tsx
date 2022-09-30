import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import CardBook from "./CardBook/CardBook";
import NavPages from "./NavPages";


interface IBooksListProps {
    children?: React.ReactNode;
}

const StyledBooksList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: stretch;
  margin: 0 -15px;
  position: relative;

  &::after {
    content: "";
    height: 1px;
    width: calc(100% - 30px);
    margin-left: 15px;
    background-color: #E7E7E7;
    display: block;
    position: absolute;
    bottom: -72px;
    left: 0;
  }
`;

const BooksList = (props: IBooksListProps) => {
    const [books, setBooks] = useState<any[]>([]);
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/search/word-to-search/${activePage}`)
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
            <StyledBooksList {...props}>
                <>
                    {books.map(book =>
                        <CardBook key={book.isbn13}
                                  title={book.title}
                                  image={book.image}
                                  price={book.price}
                                  subtitle={book.subtitle}
                        />
                    )}
                </>
            </StyledBooksList>
            <NavPages updateData={updateData} activePage={activePage}/>
        </>
    )
}

export default BooksList;
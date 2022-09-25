import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import CardBook from "./CardBook/CardBook";

interface IBooksListProps {
    children?: React.ReactNode;
}

const StyledBooksList = styled.div<IBooksListProps>`
  display: flex;
  flex-wrap: wrap;
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
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        fetch("https://api.itbook.store/1.0/new")
            .then(response => response.json())
            .then(data => setItems(data.books))
    }, [])

    return (
        <StyledBooksList { ...props }>
            <>
                { items.map(item =>
                    <CardBook key={ item.isbn13 }
                              title={ item.title }
                              image={ item.image }
                              price={ item.price }
                              subtitle={ item.subtitle }
                    />
                )}
            </>
        </StyledBooksList>
    )
}

export default BooksList;
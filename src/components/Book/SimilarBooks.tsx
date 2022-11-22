import React, { useEffect, useState } from 'react';
import Title from "../common-components/Title";
import BooksList from "../BooksList/BooksList";



const SimilarBooks = () => {
    const [books, setBooks] = useState([]);
    const [randomBooks, setRandomBooks] = useState([]);

    const getRandomObject = (array:any) => {
        const randomObject = array[Math.floor(Math.random() * array.length)];
        //setRandomBooks((prevState) => [...prevState, randomObject])
    };

    const url = 'https://api.itbook.store/1.0/search/word-to-search/100';
    useEffect(() => {
        fetch(`${url}`)
            .then(response => response.json())
            .then(data => {
                setBooks(data.books);
            })
    }, [])



    return (
        <div>
            <div>
                <Title fontSize="40" lineHeight="60">Similar Books</Title>
            </div>
            {/* <BooksList books={randomNumber}/>*/}
        </div>
    );
};

export default SimilarBooks;
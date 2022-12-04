import React, { useEffect, useState } from "react";
import { booksSelector } from "../../../redux/selectors/booksSelector/booksSelector";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { IBook } from "../../../types/booksTypes/booksTypes";
import BooksList from "../../BooksList/BooksList";

const SimilarBooks = () => {
    const books = useAppSelector(booksSelector);

    const [randomBooks, setRandomBooks] = useState<IBook[]>([]);

    useEffect(() => {
        const getRandomBooks = () => {
            let arr: number[] = [];

            function onlyUnique(value: number, index: number, self: number[]) {
                return self.indexOf(value) === index;
            }

            while (arr.length < 3) {
                let index = Math.floor(Math.random() * books.length);
                arr.push(index);
                arr = arr.filter(onlyUnique);
            }

            if (books.length) {
                arr.map(item => {
                    return setRandomBooks((prevState) => [...prevState, { ...books[item] }]);
                })
            }
        };
        getRandomBooks();
    }, [books]);

    return (
        <BooksList bottomLine='-1' books={ randomBooks }/>
    );
};

export default React.memo(SimilarBooks);
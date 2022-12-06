import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/hooks";
import { favoritesActionCreators } from "../../../redux/actions/favoritesActionsCreators/favoritesActionsCreators";
import { IBookInfo } from "../../../types/booksTypes/booksTypes";
import Icon from "./Icon/Icon";
import { favoriteBooksSelector } from "../../../redux/selectors/favoritesSelector/favoritesSelector";

const BackgroundLike = styled.div`
  width: 56px;
  height: 56px;
  background-color: #313037;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;

  &:hover {
    svg path {
      stroke: #FC857F;
    }
  }

  &:active {
    svg path {
      fill: #FC857F;
    }
  }
`;

interface IBookProps {
    book: IBookInfo;
}

const Like = ({ book }: IBookProps) => {
    const dispatch = useAppDispatch();

    const [active, setActive] = useState(false);

    const favorites = useAppSelector(favoriteBooksSelector);

    const isAdd = useCallback((favorites: IBookInfo[] | []) => {
        let arr = favorites.filter(item => item.isbn13 === book.isbn13);
        return !!arr.length;
    }, [book.isbn13])

    useEffect(() => {
        if(isAdd(favorites)){
            setActive(true);
        } else {
            setActive(false);
        }
    }, [favorites, isAdd]);

    const setFavoritesBooks = () => {
        if(!isAdd(favorites)){
            dispatch(favoritesActionCreators.addFavoritesBooks(book));
            setActive(true);
        } else {
            dispatch(favoritesActionCreators.deleteFavoritesBooks(book.isbn13));
            setActive(false);
        }
    };

    return (
        <BackgroundLike onClick={ setFavoritesBooks }>
            {
                active ? <Icon fill="#FC857F" stroke="#FC857F" /> : <Icon fill="none" stroke="white" />
            }
        </BackgroundLike>
    );
};

export default React.memo(Like);
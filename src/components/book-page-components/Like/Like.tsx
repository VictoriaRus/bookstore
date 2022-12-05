import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { favoritesActionCreators } from "../../../redux/actions/favoritesActionsCreators/favoritesActionsCreators";
import { IBookInfo } from "../../../types/booksTypes/booksTypes";
import Icon from "./Icon/Icon";

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

    const setFavoritesBooks = () => {
        if (active) {
            dispatch(favoritesActionCreators.deleteFavoritesBooks(book.isbn13));
            setActive(false);
        } else {
            dispatch(favoritesActionCreators.addFavoritesBooks(book));
            setActive(true);
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
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Zoom from "../../../assets/icons/Icon-Search.svg";
import Input from "../Input/Input";
import { booksActionCreators } from "../../../redux/actions/booksActionsCreators/booksActionsCreators";
import { useAppDispatch } from "../../../redux/hooks/hooks";

interface ISearchProps {
    width?: string;
    placeholder: string;
}

const Wrap = styled.div`
  position: relative;
  vertical-align: middle;
`;

const Icon = styled.span`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 18px;
  right: 20px;

  &:before {
    content: "";
    background-image: url("${ Zoom }");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Search = ({ width, placeholder }: ISearchProps) => {
    const dispatch = useAppDispatch();
    const [searchForm, setSearchForm] = useState({ searchText: "" });

    const onSearchTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchForm(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }, []);

    return (
        <Wrap>
            <form onSubmit={ (e) => {
                e.preventDefault();
                dispatch(booksActionCreators.getBooksWithFilter(searchForm.searchText));
            }}>
                <Input value={ searchForm.searchText } fieldName='searchText' onChange={ onSearchTextChange }
                       width={ width } placeholder={ placeholder }/>
            </form>
            <Icon/>
        </Wrap>
    )
}

export default React.memo(Search);
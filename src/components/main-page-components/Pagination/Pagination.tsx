import React, {useEffect, useState} from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { booksActionCreators } from "../../../redux/actions/booksActionsCreators/booksActionsCreators";
import { pageBooksSelector, pageCountBooksSelector } from "../../../redux/selectors/booksSelector/booksSelector";
import styled from "styled-components";
import PrevImg from "../../../assets/icons/Prev.svg";
import NextImg from "../../../assets/icons/Next.svg";
import { makeArr, MOBILE_WIDTH } from "../../../mock-data/constants";

interface IButtonProps {
    isActive: boolean;
}

const PaginationStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
`;

const But = styled.button`
  background: none;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const TextBut = styled.span<IButtonProps>`
  color: ${props => props.isActive ? "#A8A8A8" : "#313037"};
  @media ( max-width: ${ MOBILE_WIDTH } ) {
    display: none;
  }
`;

const ImgTabLeft = styled.img`
  margin-right: 11px;
  @media ( max-width: ${ MOBILE_WIDTH } ) {
    margin: 0;
  }
`;

const ImgTabRight = styled.img`
  margin-left: 11px;
  @media ( max-width: ${ MOBILE_WIDTH } ) {
    margin: 0;
  }
`;

const PaginationBtn = styled.button<IButtonProps>`
  background: transparent;
  border: none;
  color: ${ props => props.isActive ? "#313037" : "#A8A8A8" };
  margin: 0 16px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  @media ( max-width: ${ MOBILE_WIDTH } ) {
    margin: 0 14px;
  }
`;

const Pagination = () => {
    const [pages, setPages] = useState([] as number[]);

    const dispatch = useAppDispatch();

    const page = useAppSelector(pageBooksSelector);
    const pageCount = useAppSelector(pageCountBooksSelector);

    const onPageChange = (page: number) => {
        dispatch(booksActionCreators.getBooksWithPage(page));
    };

    useEffect(() => {
        setPages(makeArr(pageCount));
    }, [pageCount]);

    return (
        <PaginationStyle>
            <But onClick={ () => onPageChange(page - 1) } disabled={ page <= 1 }>
                <ImgTabLeft src={ PrevImg } alt="PrevImg"/>
                <TextBut isActive={ page <= 1 }>Prev</TextBut>
            </But>
            {
                (pageCount <= 7) ?
                    <div>{ pages.map(item => {
                        return (
                            <PaginationBtn onClick={() => onPageChange(item) } isActive={ page === item }
                                           key={ item }>{ item }</PaginationBtn>
                        )
                    })}</div>
                    :
                    <div>
                        {
                            (page <= 3 || page > (pageCount - 3)) ?
                                <>
                                    {
                                        (page < 3) &&
                                        pages.slice(0, 3).map(item => {
                                            return (
                                                <PaginationBtn onClick={ () => onPageChange(item) }
                                                               isActive={ page === item }
                                                               key={ item }>{ item }</PaginationBtn>
                                            )
                                        })
                                    }
                                    {
                                        (page === 3) &&
                                        pages.slice(0, 4).map(item => {
                                            return (
                                                <PaginationBtn onClick={ () => onPageChange(item) }
                                                               isActive={ page === item }
                                                               key={ item }>{ item }</PaginationBtn>
                                            )
                                        })
                                    }
                                    {
                                        (page >= (pageCount - 2)) &&
                                        pages.slice(0, 1).map(item => {
                                            return (
                                                <PaginationBtn onClick={ () => onPageChange(item) }
                                                               isActive={ page === item }
                                                               key={ item }>{ item }</PaginationBtn>
                                            )
                                        })
                                    }
                                    ...
                                    {
                                        (page <= 4) &&
                                        <PaginationBtn onClick={() => onPageChange(pageCount)}
                                                       isActive={ page === pageCount }
                                                       key={ pageCount }>{ pageCount }</PaginationBtn>
                                    }
                                    {
                                        (page === (pageCount - 2)) &&
                                        pages.slice((pageCount - 4), pageCount).map(item => {
                                            return (
                                                <PaginationBtn onClick={ () => onPageChange(item) }
                                                               isActive={ page === item }
                                                               key={ item }>{ item }</PaginationBtn>
                                            )
                                        })
                                    }
                                    {
                                        (page >= (pageCount - 1)) &&
                                        pages.slice((pageCount - 3), pageCount).map(item => {
                                            return (
                                                <PaginationBtn onClick={ () => onPageChange(item) }
                                                               isActive={ page === item }
                                                               key={ item }>{ item }</PaginationBtn>
                                            )
                                        })
                                    }
                                </>
                                :
                                <>
                                    {pages.slice(0, 1).map(item => {
                                        return (
                                            <PaginationBtn onClick={ () => onPageChange(item) } isActive={ page === item }
                                                           key={ item }>{ item }</PaginationBtn>
                                        )
                                    })}
                                    ...
                                    {
                                        pages.slice((page - 2), (page + 1)).map(item => {
                                            return (
                                                <PaginationBtn onClick={ () => onPageChange(item) }
                                                               isActive={ page === item }
                                                               key={ item }>{ item }</PaginationBtn>
                                            )
                                        })
                                    }
                                    ...
                                    {pages.slice((pageCount - 1), pageCount).map(item => {
                                        return (
                                            <PaginationBtn onClick={ () => onPageChange(item) } isActive={ page === item }
                                                           key={ item }>{ item }</PaginationBtn>
                                        )
                                    })}
                                </>
                        }
                    </div>
            }
            <But onClick={ () => onPageChange(page + 1) } disabled={ page >= pageCount }>
                <TextBut isActive={ page >= pageCount }>Next</TextBut>
                <ImgTabRight src={ NextImg } alt="NextImg"/>
            </But>
        </PaginationStyle>
    );
};

export default React.memo(Pagination);
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import PrevImg from '../../assets/icons/Prev.svg';
import NextImg from '../../assets/icons/Next.svg';

const StyleNavPages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
`;

interface IButtonProps {
    isActive: boolean;
}

const Tab = styled.button`
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
  color: ${props => props.isActive ? "#313037" : "#A8A8A8"};
  @media ( max-width: 415px ) {
    display: none;
  }
`;

const ImgTabLeft = styled.img`
  margin-right: 11px;
  @media ( max-width: 415px ) {
    margin: 0;
  }
`;

const ImgTabRight = styled.img`
  margin-left: 11px;
  @media ( max-width: 415px ) {
    margin: 0;
  }
`;

const PaginationBtn = styled.span<IButtonProps>`
  color: ${props => props.isActive ? "#313037" : "#A8A8A8"};
  margin: 0 16px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  @media ( max-width: 415px ) {
    margin: 0 14px;
  }
`;

interface IChildrenProps {
    children?: React.ReactNode;
}

const Pagination = (props: IChildrenProps) => {
    return <StyleNavPages>{props.children}</StyleNavPages>
}

interface INavPagesProps {
    activePage: number;
    updateData: (activePage: number) => void;
}

const NavPages = ({activePage: initialValue, updateData}: INavPagesProps) => {
    const [activePage, setActivePage] = useState(initialValue);
    let pagesCount = 100;
    let pages: number[] = [];

    useEffect(()=>{
        updateData(activePage);
    },[activePage]);

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const toRight = () => {
        setActivePage(activePage + 1);
    }

    const toLeft = () => {
        setActivePage(activePage - 1);
    }

    const getNumberPage = (condition: any) => {
        return pages.filter(condition).map(page => (
            <PaginationBtn key={page} isActive={page === activePage} onClick={() => setActivePage(page)}>
                {page}
            </PaginationBtn>
        ))
    }

    return (
        <Pagination>
            <Tab onClick={toLeft} disabled={activePage === 1}>
                <ImgTabLeft src={PrevImg} alt="PrevImg"/>
                <TextBut isActive={!(activePage === 1)}>Prev</TextBut>
            </Tab>
            <div>
                { (activePage <= 3 || activePage > (pages.length - 3)) ?
                    <>
                        {
                            (activePage < 3) &&
                            getNumberPage((page: any) => page <= 3)
                        }
                        {
                            (activePage === 3) &&
                            getNumberPage((page: any) => page <= 4)
                        }
                        {
                            (activePage === (pages.length - 2) || activePage === (pages.length - 1) || activePage === pages.length) &&
                            getNumberPage((page: any) => page === 1)
                        }
                        ...
                        {
                            (activePage <= 4) &&
                            getNumberPage((page: any) => page === pages.length)
                        }
                        {
                            (activePage === (pages.length - 2)) &&
                            getNumberPage((page: any) => page >= (pages.length - 3))
                        }
                        {
                            (activePage === (pages.length - 1) || activePage === pages.length) &&
                            getNumberPage((page: any) => page >= (pages.length - 2))
                        }
                    </>
                    :
                    <>
                        { getNumberPage((page: any) => page === 1) }
                        ...
                        {getNumberPage((page: any) => page === pages[activePage - 2] || page === pages[activePage - 1] || page === pages[activePage])}
                        ...
                        {getNumberPage((page: any) => page === pages.length)}
                    </>
                }
            </div>
            <Tab onClick={toRight} disabled={activePage === pagesCount}>
                <TextBut isActive={activePage !== pagesCount}>Next</TextBut>
                <ImgTabRight src={NextImg} alt="NextImg"/>
            </Tab>
        </Pagination>
    );
};

export default NavPages;
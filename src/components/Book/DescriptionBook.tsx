import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const TextStyled = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  padding-top: 50px;
`;

const TabHeader = styled.div`
  font-weight: 400;
  font-size: 16px;
  padding: 72px 0 24px;
  position: relative;

  &::after {
    display: flex;
    content: "";
    height: 1px;
    width: 100%;
    background-color: #E7E7E7;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media ( max-width: 414px ) {
    display: flex;
    justify-content: space-between;
  }
`;

const Tab = styled.span`
  padding: 0 40px 24px;
  color: #A8A8A8;
  position: relative;
  cursor: pointer;

  &:hover {
    color: #313037;
  }

  &:hover::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: #313037;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
  }

  @media ( max-width: 414px ) {
    padding: 0 30px;
  }
`;

interface IBookProps {
    desc?: string;
    authors?: string;
}

const DescriptionBook = ({ desc, authors }: any) => {
    const [info, setInfo] = useState(desc);

    useEffect(()=>{
        if (!info){
            setInfo(desc);
        }
    },[desc]);

    return (
        <div>
            <TabHeader>
                <Tab onClick={() => { setInfo(desc) }}>Description</Tab>
                <Tab onClick={() => { setInfo(authors) }}>Authors</Tab>
            </TabHeader>
            <TextStyled>{ info }</TextStyled>
        </div>
    );
};

export default React.memo(DescriptionBook);
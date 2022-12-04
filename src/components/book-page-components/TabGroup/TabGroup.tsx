import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MOBILE_WIDTH } from "../../../mock-data/constants";

interface ITab{
    active:boolean;
}

const Tab = styled.button<ITab>`
  font-size: 16px;
  background: transparent;
  border: 0;
  outline: 0;
  padding: 0 40px 24px;
  color: #A8A8A8;
  position: relative;
  cursor: pointer;

  ${({active}) =>
          active && 
    `color: #313037;
    &::after {
    content: '';
    height: 1px;
    width: 100%;
    background-color: #313037;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 16px;
  padding-top: 72px;
  position: relative;

  &::after {
    content: '';
    height: 1px;
    width: 100%;
    background-color: #E7E7E7;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media ( max-width: ${ MOBILE_WIDTH } ) {
    display: flex;
    justify-content: space-between;
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  padding-top: 50px;
`;

interface IBookProps {
    desc: string;
    authors: string;
}

const types: string[] = ['Description', 'Authors'];

function TabGroup({desc, authors}: IBookProps) {
    const [active, setActive] = useState(types[0]);
    const [text, setText] = useState({desc, authors});

    useEffect(()=>{
        setText((prevState => ({...prevState, desc: desc, authors: authors})))
    },[desc, authors]);

    return (
        <>
            <ButtonGroup>
                {types.map(type => (
                    <Tab key={type} active={active === type} onClick={() => setActive(type)}>
                        {type}
                    </Tab>
                ))}
            </ButtonGroup>
            {active === types[0] ? <Text>{text.desc}</Text> : <Text>{text.authors}</Text>}
        </>
    );
}

export default TabGroup;

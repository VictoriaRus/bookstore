import React from "react";
import styled from "styled-components";
import IconMinus from "./IconMinus/IconMinus";
import IconPlus from "./IconPlus/IconPlus";

const Num = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 56px;
  margin: 0 23px;
`;

const Wrap = styled.div`
  display: flex;
`;

interface ICounterProps{
    count: number;
    increase: ()=> void;
    decrease: ()=> void;
}

const Counter = ({ count, increase, decrease }: ICounterProps) => {
    return (
        <Wrap>
            <IconMinus disabled={ count === 1 } onClick={ decrease }/>
            <Num>{ count }</Num>
            <IconPlus onClick={ increase }/>
        </Wrap>
    );
};

export default React.memo(Counter);
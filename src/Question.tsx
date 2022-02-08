import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

import { QuestType } from "./data";

type StyledProps = {
  isHidden: boolean;
};

const QuestWrapper = styled.article`
  padding: 1rem 1.5rem;
  border: 2px solid var(--clr-grey-special);
  margin-bottom: 1rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    text-transform: none;
    line-height: 1.5;
    margin-bottom: 0;
  }
`;

const Info = styled.p<StyledProps>`
  color: var(--clr-grey-3);
  margin-bottom: 0;
  margin-top: 0.5rem;
  display: ${(props) => (props.isHidden ? "none" : "block")};
`;

const Button = styled.button`
  background: transparent;
  border-color: transparent;
  width: 2rem;
  height: 2rem;
  background: var(--clr-grey-special);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--clr-red-special);
  cursor: pointer;
  margin-left: 1rem;
  align-self: center;
  min-width: 2rem;
`;

const Question = ({ title, info }: QuestType) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <QuestWrapper>
      <Header>
        <h4>{title}</h4>
        <Button
          onClick={() => {
            setIsHidden(!isHidden);
          }}
        >
          {isHidden ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </Button>
      </Header>
      <Info isHidden={isHidden}>{info}</Info>
    </QuestWrapper>
  );
};

export default Question;

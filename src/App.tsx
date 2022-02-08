import React from "react";
import styled from "styled-components";

import Question from "./Question";
import questions from "./data";

const AppWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.section`
  width: 90vw;
  margin: 5rem auto;
  background-color: var(--clr-white);
  border-radius: var(--radius);
  padding: 2.5rem 2rem;
  max-width: var(--fixed-width);
  display: grid;
  gap: 1rem 2rem;

  h3 {
    line-height: 1.2;
    font-weight: 500;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 250px 1fr;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Container>
        <h3>questions and answers about login</h3>
        <div>
          {questions.map((quest) => (
            <Question key={quest.id} {...quest} />
          ))}
        </div>
      </Container>
    </AppWrapper>
  );
}

export default App;

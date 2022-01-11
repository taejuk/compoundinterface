import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Web3ReactManager from '../components/Web3ReactManager';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 120px 16px 0px 16px;
  align-items: center;
  flex: 1;
  z-index: 1;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 4rem 8px 16px 8px;
  `};
`;

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
`;

const Marginer = styled.div`
  margin-top: 5rem;
`;

const App = (): React.ReactElement => {
  return (
    <Web3ReactManager>
      <AppWrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BodyWrapper>
          <Marginer />
        </BodyWrapper>
      </AppWrapper>
    </Web3ReactManager>
  );
};

export default App;

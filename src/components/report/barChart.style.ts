import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 2.75rem;
  display: flex;
  align-items: center;
  /* margin-top: 1rem; */
  & .chart {
    width: calc(100% - 3rem);
    padding-left: 1rem;
  }
`;

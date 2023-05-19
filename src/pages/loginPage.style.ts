import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20.125rem;
  position: relative;
  padding-bottom: 5.875rem;
  .background {
    position: absolute;
    top: 0;
    width: calc(100% + 1.25rem * 2);
    min-height: 100vh;
    background: linear-gradient(180.03deg, #71cfd5 44.58%, #2c85ab 99.97%);
    z-index: -999;
  }
  > img {
    width: 6.688rem;
    height: 6.25rem;
    margin-top: 10.75rem;
  }
`;

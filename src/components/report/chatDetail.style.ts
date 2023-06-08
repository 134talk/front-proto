import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  .sectionWrapper {
    position: absolute;
    height: calc(100% - 12rem);
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    padding-bottom: 2rem;
  }
`;

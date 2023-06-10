import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  .sectionWrapper {
    width: calc(100% - 1.25rem * 2);
    position: absolute;
    height: calc(100% - 9rem);
    overflow: auto;
    padding-bottom: 5rem;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

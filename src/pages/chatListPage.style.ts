import { styled } from 'styled-components';

export const Container = styled.div`
  > button {
    width: 50rem;
    background: none;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #475467;
    margin-top: 1.125rem;
    margin-left: 15.8rem;
  }
  > section {
    width: calc(100% - 1.25rem * 2);
    height: calc(100% - 16.125rem);
    margin-top: 0.375rem;
    padding-bottom: 3rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

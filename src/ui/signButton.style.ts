import { styled } from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 7rem;
  background: #ffffff;
  border: 2px solid #c9c8c4;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  &:hover {
    border: none;
    background: #c5e7fa;
    color: #034b74;
  }
`;

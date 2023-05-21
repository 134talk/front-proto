import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5.625rem;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0 -2px 6px 0 rgba(172, 173, 177, 0.1);
  padding: 0 1.25rem;
  text-align: center;
  color: white;
  button {
    width: 5.234rem;
    height: 3.5rem;
    background: none;
    font-size: 0.75rem;
    font-weight: 700;
    color: #000000;
  }
`;

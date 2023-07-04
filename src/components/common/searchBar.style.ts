import { styled } from 'styled-components';

type StyleProps = {
  $isKeyword: boolean;
};

export const Container = styled.div`
  width: 100%;
  height: 2.75rem;
  position: relative;
  background: ${({ theme }) => theme.white};
  border: ${({ theme }) => `solid 1px ${theme.gray300}`};
  border-radius: 8px;
  input {
    width: 70%;
    height: 2.75rem;
    background: none;
    border: none;
    &::placeholder {
      color: ${({ theme }) => theme.gray500};
    }
    &:focus {
      outline: none;
    }
  }
  .iconWrapper {
    width: 100%;
    height: 2.75rem;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 18px 8px 18px 18px;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const CancelButton = styled.button<StyleProps>`
  visibility: ${({ $isKeyword }) => ($isKeyword ? 'visible' : 'hidden')};
  background: none;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
`;

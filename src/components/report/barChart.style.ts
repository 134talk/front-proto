import { styled } from 'styled-components';

type StyleProps = {
  color: string;
  value: string;
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  > img {
    width: 2.75rem;
    height: 2.75rem;
  }
  > .wrapper {
    height: 2.75rem;
    display: flex;
    flex-direction: column;
    & .textWrapper {
      display: flex;
      justify-content: space-between;
      margin-top: -8px;
      p {
        font-size: 0.875rem;
        color: #475467;
        &:nth-child(2) {
          font-size: 1rem;
          font-weight: 600;
          color: #111111;
        }
      }
    }
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: 0.4rem;
  border-radius: 3px;
  background-color: #e9ecef;
  margin-top: -10px;
`;

export const Percent = styled.div<StyleProps>`
  width: ${({ value }) => `${value}%`};
  height: 0.4rem;
  border-radius: 3px;
  background: ${({ color }) => `#${color}`};
`;

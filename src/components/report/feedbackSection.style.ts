import { styled } from 'styled-components';

type StyleProps = {
  color: string;
};

export const Container = styled.div`
  width: calc(100% - 1.25rem);
  padding: 1.6rem 1.9rem;
  border-radius: 20px;
  background: #ffffff;
  margin-top: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .small {
    width: 12rem;
    font-size: 1rem;
    color: #111111;
  }
`;

export const Value = styled.div<StyleProps>`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ color }) => `#${color}`};
  display: flex;
`;

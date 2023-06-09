import { styled } from 'styled-components';

type StyleProps = {
  color: string;
};

export const Container = styled.div`
  width: calc(100% - 1.25rem);
  padding: 1.6rem 1.9rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.white};
  margin-top: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .small {
    width: 12rem;
    font-size: ${({ theme }) => theme.fs16};
    color: ${({ theme }) => theme.gray900};
  }
`;

export const Value = styled.div<StyleProps>`
  font-size: ${({ theme }) => theme.fs20};
  font-weight: ${({ theme }) => theme.fw600};
  color: ${({ color }) => `#${color}`};
  display: flex;
`;

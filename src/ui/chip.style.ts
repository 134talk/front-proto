import { styled } from 'styled-components';
import type { ChipProps } from './Chip';

export const Container = styled.div<ChipProps>`
  display: inline-block;
  background: ${({ text, theme }) =>
    text === '참여가능' ? theme.chip_green : theme.gray100};
  padding: 0.125rem 0.5rem;
  margin-bottom: 0.6rem;
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fs14};
  font-weight: ${({ theme }) => theme.fw700};
  color: ${({ theme }) => theme.gray800};
  position: relative;
  img {
    vertical-align: text-top;
    width: 1.042rem;
    height: 1.042rem;
    margin-left: 4px;
    margin-right: -3px;
    cursor: pointer;
  }
`;

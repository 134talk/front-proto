import { styled } from 'styled-components';
import type { ChipProps } from './Chip';

export const Container = styled.div<ChipProps>`
  display: inline-block;
  background: ${({ text }) => (text === '참여가능' ? '#ACEED6' : '#F1F3F5')};
  padding: 0.125rem 0.5rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 700;
  color: #1d2939;
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

import { styled } from 'styled-components';

export interface Props {
  width?: string;
  margin?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  border?: string;
  category: 'confirm' | 'cancel' | 'kakao';
  text?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  $bgColor?: string;
  color?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: Props) {
  return <Btn {...props}>{props.children ? props.children : props.text}</Btn>;
}

const Btn = styled.button<Props>`
  width: ${({ width }) => (width ? width : '100%')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  margin: ${({ margin }) => (margin ? margin : '0')};
  padding: ${({ padding }) => (padding ? padding : '0.75rem 1.3rem')};
  font-size: ${({ fontSize, theme }) => (fontSize ? fontSize : theme.fs16)};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight ? fontWeight : theme.fw500};
  border: ${({ category, theme }) =>
    category === 'cancel'
      ? `1px solid ${theme.primary_blue}`
      : '1px solid transparent'};
  background-color: ${({ category, $bgColor, theme }) =>
    category === 'confirm'
      ? $bgColor
        ? $bgColor
        : theme.primary_blue
      : category === 'cancel'
      ? theme.white
      : theme.kakao_yellow};
  color: ${({ category, theme, color }) =>
    category === 'confirm'
      ? color
        ? color
        : theme.white
      : category === 'cancel'
      ? theme.primary_deep_blue
      : theme.gray900};
  border-radius: 50px;
  &:disabled {
    background: ${({ theme }) => theme.primary_blue};
    opacity: 0.3;
    color: ${({ theme }) => theme.white};
    cursor: auto;
  }
`;

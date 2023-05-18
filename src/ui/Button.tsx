import { styled } from 'styled-components';

export interface BtnProps {
  width?: string;
  margin?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  border?: string;
  bgColor?: string;
  category: 'confirm' | 'cancel';
  text?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: BtnProps) {
  return <Btn {...props}>{props.text}</Btn>;
}

const Btn = styled.button<BtnProps>`
  width: ${props => (props.width ? props.width : '100%')};
  margin: ${props => (props.margin ? props.margin : '0')};
  padding: ${props => (props.padding ? props.padding : '12px 32px')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '500')};
  border: ${props =>
    props.category === 'confirm'
      ? '1px solid transparent'
      : '1px solid #C9C8C4'};
  background-color: ${props =>
    props.category === 'confirm' ? '#FFD74B' : '#FFFFFF'};
  color: #000000;
  border-radius: 50px;
  &:disabled {
    border: 1px solid #c9c8c4;
    background-color: #ffffff;
    color: #c9c8c4;
    cursor: auto;
  }
`;

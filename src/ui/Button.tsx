import { styled } from 'styled-components';

export interface BtnProps {
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
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: BtnProps) {
  return <Btn {...props}>{props.children ? props.children : props.text}</Btn>;
}

const Btn = styled.button<BtnProps>`
  width: ${props => (props.width ? props.width : '100%')};
  display:flex;
  align-items:center;
  justify-content:center;
  gap:0.2rem;
  margin: ${props => (props.margin ? props.margin : '0')};
  padding: ${props => (props.padding ? props.padding : '0.75rem 1.3rem')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '500')};
  border: ${props =>
    props.category === 'cancel'
      ? '1px solid #034B74'
      : '1px solid transparent'};
  background-color: ${props =>
    props.category === 'confirm'
      ? '#034B74'
      : props.category === 'cancel'
      ? '#FFFFFF'
      : '#FEE500'};
  color: ${props =>
    props.category === 'confirm'
      ? '#FFFFFF'
      : props.category === 'cancel'
      ? '#034B74'
      : '#000000'};
  border-radius: 50px;
  &:disabled {
    background: #034b74;
    opacity: 0.3;
    color: #ffffff
    cursor: auto;
  }
`;

import { styled } from 'styled-components';

export interface BtnProps {
  width?: string;
  margin?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  border?: string;
  bgColor?: string;
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
  font-size: ${props => (props.fontSize ? props.fontSize : '16px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '500')};
  border: ${props => (props.border ? props.border : '1px solid transparent')};
  background-color: ${props => (props.bgColor ? props.bgColor : '#FFD74B')};
  color: black;
  border-radius: 50px;
  cursor: pointer;
`;

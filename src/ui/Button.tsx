import * as t from './button.style';

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
  return (
    <t.Btn {...props}>{props.children ? props.children : props.text}</t.Btn>
  );
}

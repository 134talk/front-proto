import * as t from './bubble.style';

type Props = {
  children: React.ReactNode;
  isClickable?: boolean;
  onClick?: () => void;
};

export default function Bubble({ children, isClickable, onClick }: Props) {
  return (
    <t.Container onClick={onClick} $isClickable={isClickable}>
      {children}
    </t.Container>
  );
}

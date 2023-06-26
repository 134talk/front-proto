import * as t from './bubble.style';

type Props = {
  children: React.ReactNode;
  isClickable?: boolean;
  isScrollable?: boolean;
  onClick?: () => void;
};

export default function Bubble({
  children,
  isClickable,
  isScrollable,
  onClick,
}: Props) {
  return (
    <t.Container
      onClick={onClick}
      $isClickable={isClickable}
      $isScrollable={isScrollable}
    >
      {children}
    </t.Container>
  );
}

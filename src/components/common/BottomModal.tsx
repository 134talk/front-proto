import * as t from './bottomModal.style';

export interface BottomModalProps {
  isOpen: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function BottomModal({
  isOpen,
  children,
  onClick,
}: BottomModalProps) {
  return (
    <t.Container>
      <t.ContentWrapper isOpen={isOpen} onClick={onClick}>
        {children}
      </t.ContentWrapper>
    </t.Container>
  );
}

import { keyframes, styled } from 'styled-components';

export interface BottomModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  children?: React.ReactNode;
}

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function BottomModal({
  isOpen,
  children,
  toggleModal,
}: BottomModalProps) {
  return (
    <Container>
      <ContentWrapper isOpen={isOpen}>{children}</ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ContentWrapper = styled.div<{ isOpen: boolean }>`
  animation: ${fadeInUp} 0.5s ease-in-out;
  opacity: ${props => (props.isOpen ? '1' : '0')};
  pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
  background-color: white;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

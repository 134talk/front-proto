import React from 'react';
import { CLOSE_BLACK } from 'shared/constants/icons';
import { styled } from 'styled-components';

type Props = {
  isCloseButton?: boolean;
  children: React.ReactNode;
  onClose?: () => void;
};

export default function BaseModal({ isCloseButton, children, onClose }: Props) {
  return (
    <Container>
      <div className="wrapper">
        {isCloseButton && (
          <section>
            <img src={CLOSE_BLACK} alt="닫기" onClick={onClose} />
          </section>
        )}
        {children}
      </div>
    </Container>
  );
}

export const Container = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    width: 19.69rem;
    min-height: 11.5rem;
    background: #ffffff;
    padding: 1.7rem 1.875rem;
    > section {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      img {
        cursor: pointer;
      }
    }
  }
`;

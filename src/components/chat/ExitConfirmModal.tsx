import { BaseModal } from 'components';
import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { styled } from 'styled-components';
import { Button } from 'ui';

interface ExitConfirmModalProps {
  isOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ExitConfirmModal({
  isOpen,
  setIsModalOpen,
}: ExitConfirmModalProps) {
  return (
    <>
      {isOpen && (
        <BaseModal>
          <Container>
            <p className="guide_text">
              나가시면 대화에 참여할 수 없습니다.
              <br />
              정말 나가시겠습니까?
            </p>
            <div className="button_wrapper">
              <Button
                category="cancel"
                text="취소"
                onClick={() => setIsModalOpen(false)}
              />
              <Button category="confirm" text="확인" />
            </div>
          </Container>
        </BaseModal>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1rem;
  p {
    &.guide_text {
      font-size: 1.125rem;
      font-weight: bold;
      text-align: center;
      line-height: 1.3;
    }
  }
  div {
    &.button_wrapper {
      display: flex;
      gap: 0.5rem;
    }
  }
`;

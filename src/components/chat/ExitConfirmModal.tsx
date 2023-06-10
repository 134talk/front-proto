import { BaseModal } from 'components';
import type { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'ui';
import * as t from './exitConfirmModal.style';

interface ExitConfirmModalProps {
  isOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ExitConfirmModal({
  isOpen,
  setIsModalOpen,
}: ExitConfirmModalProps) {
  const navigate = useNavigate();
  return (
    <>
      {isOpen && (
        <BaseModal>
          <t.Container>
            <p>
              나가시면 대화에 참여할 수 없습니다.
              <br />
              정말 나가시겠습니까?
            </p>
            <div>
              <Button
                category="cancel"
                text="취소"
                onClick={() => setIsModalOpen(false)}
              />
              <Button
                category="confirm"
                text="확인"
                // change channelId
                onClick={() => navigate('/channel/:channelId')}
              />
            </div>
          </t.Container>
        </BaseModal>
      )}
    </>
  );
}

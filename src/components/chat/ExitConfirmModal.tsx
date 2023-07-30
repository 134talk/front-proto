import { BaseModal } from 'components';
import { useParams } from 'react-router-dom';
import type { ModalActions } from 'shared/hooks/useModal';
import useExitChatRoom from 'shared/query/useExitChatRoom';
import { Button } from 'ui';
import * as t from './exitConfirmModal.style';

interface ExitConfirmModalProps {
  modalActions: ModalActions;
}

export default function ExitConfirmModal({
  modalActions,
}: ExitConfirmModalProps) {
  const { roomId, chatUserId } = useParams();
  const { mutate } = useExitChatRoom();
  const handleConfirm = () => {
    modalActions.close();
    mutate({
      conversation_room_id: Number(roomId),
      conversation_user_id: Number(chatUserId),
    });
  };
  return (
    <>
      {modalActions.isOpen && (
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
                onClick={modalActions.close}
              />
              <Button category="confirm" text="확인" onClick={handleConfirm} />
            </div>
          </t.Container>
        </BaseModal>
      )}
    </>
  );
}

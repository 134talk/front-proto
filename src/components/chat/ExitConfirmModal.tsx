import { BaseModal } from 'components';
import { useNavigate, useParams } from 'react-router-dom';
import type { ModalActions } from 'shared/hooks/useModal';
import useUserData from 'shared/hooks/useUserData';
import { useAppDispatch } from 'shared/store/store';
import { Button } from 'ui';
import * as t from './exitConfirmModal.style';

interface ExitConfirmModalProps {
  modalActions: ModalActions;
}

export default function ExitConfirmModal({
  modalActions,
}: ExitConfirmModalProps) {
  const { uid } = useUserData();
  const { roomId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // 대화 나가기 activeFlag = false 처리
  const waitNavigate = async () => {
    dispatch({
      type: 'sendData',
      payload: {
        destination: '/pub/enter',
        data: {
          roomId: Number(roomId),
          userId: Number(uid),
          selected: false,
          socketFlag: 0,
        },
      },
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
    navigate('/chats');
  };
  const handleConfirm = () => {
    modalActions.close();
    waitNavigate();
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

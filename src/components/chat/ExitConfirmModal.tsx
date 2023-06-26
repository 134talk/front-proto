import { BaseModal } from 'components';
import type { Dispatch, SetStateAction } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useUserData from 'shared/hooks/useUserData';
import { useAppDispatch } from 'shared/store/store';
import { Button } from 'ui';
import * as t from './exitConfirmModal.style';

interface ExitConfirmModalProps {
  isOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  onConfirm: () => void;
}

export default function ExitConfirmModal({
  isOpen,
  setIsModalOpen,
  onConfirm,
}: ExitConfirmModalProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { roomId } = useParams();
  const { uid } = useUserData();
  const waitNavigate = async () => {
    dispatch({
      type: 'sendData',
      payload: {
        destination: '/pub/enter',
        data: {
          roomId,
          userId: uid,
          selected: false,
          socketFlag: 0,
        },
      },
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
    navigate('/chats');
  };
  const handleConfirm = () => {
    onConfirm();
    waitNavigate();
  };
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
              <Button category="confirm" text="확인" onClick={handleConfirm} />
            </div>
          </t.Container>
        </BaseModal>
      )}
    </>
  );
}

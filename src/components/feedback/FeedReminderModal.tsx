import { BaseModal } from 'components';
import { useParams } from 'react-router-dom';
import useFeedRequirement from 'shared/query/useFeedRequirement';
import { Button } from 'ui';
import * as t from './feedReminderModal.style';

export type FeedRequirementData = {
  status_energy: number;
  status_relation: number;
  status_stable: number;
  status_stress: number;
};
type FeedReminderModalProps = {
  onClose: () => void;
  feedRequirementData: FeedRequirementData;
};

export default function FeedReminderModal({
  onClose,
  feedRequirementData,
}: FeedReminderModalProps) {
  const { roomId } = useParams();
  const { putMutate } = useFeedRequirement();
  const handleCancel = () => {
    if (feedRequirementData) {
      putMutate({
        conversation_room_id: Number(roomId),
        status_energy: feedRequirementData?.status_energy,
        status_relation: feedRequirementData?.status_relation,
        status_stable: feedRequirementData?.status_stable,
        status_stress: feedRequirementData?.status_stress,
      });
    }
  };
  const handleConfirm = () => {
    localStorage.setItem('feedbackKey', 'true');
    onClose();
  };
  return (
    <BaseModal>
      <t.Container>
        <p>
          오늘 남긴 피드백이 있어요.
          <br />
          수정 하시겠어요?
        </p>
        <div>
          <Button category="cancel" text="취소" onClick={handleCancel} />
          <Button category="confirm" text="확인" onClick={handleConfirm} />
        </div>
      </t.Container>
    </BaseModal>
  );
}

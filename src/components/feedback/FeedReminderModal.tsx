import { BaseModal } from 'components';
import { useParams } from 'react-router-dom';
import useFeedRequirement from 'shared/query/useFeedRequirement';
import { Button } from 'ui';
import * as t from './feedReminderModal.style';

export type FeedRequirementData = {
  statusEnergy: number;
  statusRelation: number;
  statusStable: number;
  statusStress: number;
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
  const { statusEnergy, statusRelation, statusStress, statusStable } =
    feedRequirementData;
  const { mutate } = useFeedRequirement();
  const handleCancel = () => {
    if (feedRequirementData) {
      mutate({
        roomId: Number(roomId),
        statusEnergy,
        statusRelation,
        statusStress,
        statusStable,
      });
    }
  };
  const handleConfirm = () => {
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

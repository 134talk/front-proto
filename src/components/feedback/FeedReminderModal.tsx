import { BaseModal } from 'components';
import { useParams, useSearchParams } from 'react-router-dom';
import type { Res } from 'shared/query/useFeedRequirement';
import useFeedRequirement from 'shared/query/useFeedRequirement';
import { Button } from 'ui';
import * as t from './feedReminderModal.style';

type FeedReminderModalProps = {
  onClose: () => void;
  feedRequirement: Res;
};
export default function FeedReminderModal({
  onClose,
  feedRequirement,
}: FeedReminderModalProps) {
  const { roomId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { statusEnergy, statusRelation, statusStress, statusStable } =
    feedRequirement;
  const { mutate } = useFeedRequirement();
  const handleCancel = () => {
    if (feedRequirement) {
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
    searchParams.set('energy', String(statusEnergy));
    searchParams.set('relation', String(statusRelation));
    searchParams.set('stress', String(statusStress));
    searchParams.set('stable', String(statusStable));
    setSearchParams(searchParams);
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

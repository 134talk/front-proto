import { FeedReminderModal, StatusReminder } from 'components';
import { useEffect } from 'react';
import useModal from 'shared/hooks/useModal';
import useFeedRequirement from 'shared/query/useFeedRequirement';
import * as t from './feedRequirement.style';

export default function FeedRequirement() {
  const feedReminderModal = useModal();
  const { feedRequirement } = useFeedRequirement();
  useEffect(() => {
    if (feedRequirement?.today) feedReminderModal.open();
  }, [feedRequirement]);
  return (
    <>
      {feedReminderModal.isOpen && (
        <FeedReminderModal
          onClose={feedReminderModal.close}
          feedRequirement={feedRequirement}
        />
      )}
      <t.Container>
        <div className="title_wrapper">
          <p className="title_text">
            '{feedRequirement?.nickname}({feedRequirement?.name})'님,
            <br />
            오늘 대화는 어떠셨나요?
          </p>
          <p className="sub_text">대화 후에 어떤 변화가 있었는지 알려주세요.</p>
        </div>
        <StatusReminder />
      </t.Container>
    </>
  );
}

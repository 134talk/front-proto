import { SurveySheet } from 'components';
import { useParams } from 'react-router-dom';
import {
  MOOD_OPTIONS,
  PERSONALITY_OPTIONS,
  STATUS_OPTIONS,
} from 'shared/constants/constants';

export default function NicknamePage() {
  const { type } = useParams();

  return (
    <>
      {type === 'mood' && (
        <SurveySheet
          optionList={MOOD_OPTIONS}
          question={'최근에 나의 감정을 나타내는 단어가 있나요?'}
        />
      )}
      {type === 'personality' && (
        <SurveySheet
          optionList={PERSONALITY_OPTIONS}
          question={'업무를 할 때 나의 행동과 비슷한 단어가 있나요?'}
        />
      )}
      {type === 'status' && (
        <SurveySheet
          optionList={STATUS_OPTIONS}
          question={'지금 내가 원하는 상태가 있나요?'}
        />
      )}
    </>
  );
}

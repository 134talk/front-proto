import { BarChart, Bubble, ReportTitle } from 'components';
import useReport from 'shared/query/useReport';
import * as t from './chatDetail.style';

export default function ChatDetail() {
  const { chatData } = useReport('chat');

  return (
    <t.Container>
      <div className="sectionWrapper">
        <ReportTitle text="우리 대화는?" />
        <Bubble isScrollable>
          <h1>
            대화에서 많은 선택을 받은 대화 주제는{' '}
            <span>
              '{KEYWORD_LIST[chatData?.data.keywordScore[0].code - 1]}'
            </span>{' '}
            이에요.
          </h1>
          {chatData?.data.keywordScore.map(({ code, score }) => (
            <BarChart key={code} text={KEYWORD_LIST[code - 1]} value={score} />
          ))}
        </Bubble>
        <Bubble isScrollable>
          <h1>
            대화하면서 많이 표현한 감정은{' '}
            <span>'{chatData?.data.emoticonScore[0].emoticonName}'</span>{' '}
            이에요.
          </h1>
          {chatData?.data.emoticonScore.map(({ emoticonName, score }) => (
            <BarChart
              key={emoticonName}
              text={emoticonName}
              value={score}
              isImage
            />
          ))}
        </Bubble>
        <Bubble isScrollable>
          <h1>감정이 많이 오고 간 질문 top3</h1>
          {chatData?.data.questionList.map((question, idx) => (
            <div className="rankWrapper" key={question}>
              <p>{idx + 1}위</p>
              <p>{question}</p>
            </div>
          ))}
        </Bubble>
      </div>
    </t.Container>
  );
}

const KEYWORD_LIST = [
  '일상',
  '관계',
  '나',
  '휴식',
  '미래/성장',
  '여행',
  '팀',
  '커리어',
  '사랑',
  '일',
];

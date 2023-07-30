import { BarChart, Bubble, ReportTitle } from 'components';
import useReport from 'shared/query/useReport';
import isMobile from 'shared/utils/deviceDetector';
import * as t from './chatDetail.style';

export default function ChatDetail() {
  const { chatData } = useReport({ types: 'chat' });

  return (
    <t.Container>
      <t.Scroll $isMobile={isMobile}>
        <ReportTitle text="우리 대화는?" />
        <Bubble>
          <h1>
            대화에서 많은 선택을 받은 대화 주제는{' '}
            <span>
              '{KEYWORD_LIST[chatData?.data.keyword_score[0].keyword_id - 1]}'
            </span>{' '}
            이에요.
          </h1>
          <div className="chartWrapper">
            {chatData?.data.keyword_score.map(
              ({ keyword_id, keyword_count }) => (
                <BarChart
                  key={keyword_id}
                  text={KEYWORD_LIST[keyword_id - 1]}
                  value={keyword_count}
                />
              )
            )}
          </div>
        </Bubble>
        <Bubble>
          <h1>
            대화하면서 많이 표현한 감정은{' '}
            <span>'{chatData?.data.emotion_score[0].emotion_name}'</span>{' '}
            이에요.
          </h1>
          <div className="chartWrapper">
            {chatData?.data.emotion_score.map(
              ({ emotion_name, emotion_count }) => (
                <BarChart
                  key={emotion_name}
                  text={emotion_name}
                  value={emotion_count}
                  isImage
                />
              )
            )}
          </div>
        </Bubble>
        <Bubble>
          <h1>감정이 많이 오고 간 질문 top3</h1>
          {chatData?.data.question_list.map((question, idx) => (
            <div className="rankWrapper" key={question}>
              <p>{idx + 1}위</p>
              <p>{question}</p>
            </div>
          ))}
        </Bubble>
      </t.Scroll>
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

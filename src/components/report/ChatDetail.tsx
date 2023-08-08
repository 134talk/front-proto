import { BarChart, Bubble, NoData, ReportTitle } from 'components';
import { KEYWORD_NAME_LIST } from 'shared/constants/constants';
import useReport from 'shared/query/useReport';
import isMobile from 'shared/utils/deviceDetector';
import * as t from './chatDetail.style';

export default function ChatDetail() {
  const { chatData } = useReport({ types: 'chat' });

  return (
    <t.Container>
      {chatData === null ? (
        <NoData />
      ) : (
        <t.Scroll $isMobile={isMobile}>
          <ReportTitle text="우리 대화는?" />
          <Bubble>
            <h1>
              대화에서 많은 선택을 받은 대화 주제는{' '}
              <span>
                '{KEYWORD_NAME_LIST[chatData?.keyword_score[0].keyword_id - 1]}'
              </span>{' '}
              이에요.
            </h1>
            <div className="chartWrapper">
              {chatData?.keyword_score.map(({ keyword_id, keyword_count }) => (
                <BarChart
                  key={keyword_id}
                  text={KEYWORD_NAME_LIST[keyword_id - 1]}
                  value={keyword_count}
                />
              ))}
            </div>
          </Bubble>
          <Bubble>
            <h1>
              대화하면서 많이 표현한 감정은{' '}
              <span>'{chatData?.emotion_score[0].emotion_name}'</span> 이에요.
            </h1>
            <div className="chartWrapper">
              {chatData?.emotion_score.map(
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
            {chatData?.question_list.map((question, idx) => (
              <div className="rankWrapper" key={question}>
                <p>{idx + 1}위</p>
                <p>{question}</p>
              </div>
            ))}
          </Bubble>
        </t.Scroll>
      )}
    </t.Container>
  );
}

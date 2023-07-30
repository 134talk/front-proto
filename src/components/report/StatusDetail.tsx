import { BarChart, Bubble, ReportTitle } from 'components';
import useReport from 'shared/query/useReport';
import isMobile from 'shared/utils/deviceDetector';
import * as t from './statusDetail.style';

export default function StatusDetail() {
  const { statusData } = useReport({ types: 'status' });

  return (
    <t.Container>
      <t.Scroll $isMobile={isMobile}>
        <ReportTitle text="지금 우리는?" />
        <Bubble>
          <h1>
            우리는 최근{' '}
            <span>'{statusData?.data.emotion_array[0].emotion}'</span> 감정을
            많이 느끼고 있어요.
          </h1>
          <div className="chartWrapper">
            {statusData?.data.emotion_array.map(
              ({ emotion, emotion_count }) => (
                <BarChart
                  key={emotion}
                  text={emotion}
                  value={emotion_count}
                  isImage
                />
              )
            )}
          </div>
        </Bubble>
        <Bubble>
          <h1>
            우리 중엔 <span>'{statusData?.data.action_array[0].action}'</span>{' '}
            사람이 많아요.
          </h1>
          <div className="chartWrapper">
            {statusData?.data.action_array.map(({ action, action_count }) => (
              <BarChart
                key={action}
                text={action}
                value={action_count}
                isImage
              />
            ))}
          </div>
        </Bubble>
        <Bubble>
          <h1>
            우리는 지금 <span>'{statusData?.data.state_array[0].state}'</span>{' '}
            를 원하는 사람이 많아요.
          </h1>
          <div className="chartWrapper">
            {statusData?.data.state_array.map(({ state, state_count }) => (
              <BarChart key={state} text={state} value={state_count} isImage />
            ))}
          </div>
        </Bubble>
      </t.Scroll>
    </t.Container>
  );
}

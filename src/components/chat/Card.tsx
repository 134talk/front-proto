import { ROTATE_ICON } from 'shared/constants/icons';
import { CardImg } from 'ui';
import * as t from './card.style';

interface CardProps {
  size?: string;
  isFront?: boolean;
  lineColor: string;
  fillColor: string;
  keyword: string;
  depth?: number;
  question?: string;
  handleRotate?: () => void;
  handleSwipe?: () => void;
}

export default function Card({
  size,
  isFront,
  lineColor,
  fillColor,
  keyword,
  depth,
  question,
  handleRotate,
  handleSwipe,
}: CardProps) {
  return (
    <t.Container onClick={handleSwipe}>
      <t.CardWrapper $isFront={isFront} size={size} onClick={handleRotate}>
        <t.CardSideWrapper className="card card_front">
          <CardImg lineColor={lineColor} fillColor={fillColor} size={size} />
          <t.ChatWrapper>
            <p className="keyword_text">{keyword}</p>
            <p className="depth_text">{depth}m</p>
            <div>
              <img src={ROTATE_ICON} alt="rotate" />
              <button>뒷면 확인하기</button>
            </div>
          </t.ChatWrapper>
        </t.CardSideWrapper>
        <t.CardSideWrapper className="card card_back">
          <CardImg lineColor={lineColor} fillColor={fillColor} size={size} />
          <t.ChatWrapper>
            <p className="question_text">{question}</p>
            <div>
              <img src={ROTATE_ICON} alt="rotate" />
              <button>앞면 확인하기</button>
            </div>
          </t.ChatWrapper>
        </t.CardSideWrapper>
      </t.CardWrapper>
    </t.Container>
  );
}

import { ROTATE_ICON } from 'shared/constants/icons';
import { CardImg } from 'ui';
import * as t from './card.style';

interface CardProps {
  isFront?: boolean;
  lineColor: string;
  fillColor: string;
  keyword: string;
  hint?: string;
  question?: string;
  onClick?: () => void;
}

export default function Card({
  isFront,
  lineColor,
  fillColor,
  keyword,
  hint,
  question,
  onClick,
}: CardProps) {
  return (
    <t.Container>
      <t.CardWrapper isFront={isFront} onClick={onClick}>
        <t.FrontWrapper isFront={isFront}>
          <CardImg lineColor={lineColor} fillColor={fillColor} size="16rem" />
          <t.ChatWrapper>
            <p className="keyword_text">{keyword}</p>
            <p className="hint_text">{hint}</p>
            <div>
              <img src={ROTATE_ICON} alt="rotate" />
              <button>뒷면 확인하기</button>
            </div>
          </t.ChatWrapper>
        </t.FrontWrapper>
        <t.BackWrapper isFront={isFront}>
          <CardImg lineColor={lineColor} fillColor={fillColor} size="16rem" />
          <t.ChatWrapper>
            <p className="question_text">{question}</p>
            <div>
              <img src={ROTATE_ICON} alt="rotate" />
              <button>앞면 확인하기</button>
            </div>
          </t.ChatWrapper>
        </t.BackWrapper>
      </t.CardWrapper>
    </t.Container>
  );
}

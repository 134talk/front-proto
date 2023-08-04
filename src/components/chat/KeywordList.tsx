import { SELECTED_IMAGE } from 'shared/constants/icons';
import { CardImg } from 'ui';
import * as t from './keywordList.style';

interface KeywordListProps {
  lineColor: string;
  fillColor: string;
  keyword: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function KeywordList({
  lineColor,
  fillColor,
  keyword,
  selected,
  onClick,
}: KeywordListProps) {
  return (
    <t.Container onClick={onClick}>
      <CardImg lineColor={lineColor} fillColor={fillColor} />
      <div>
        {selected && <img src={SELECTED_IMAGE} alt="keyword" />}
        <p>{keyword}</p>
      </div>
    </t.Container>
  );
}

import * as t from './emotionData.style';

type Props = {
  imgSrc: string;
  name: string;
  count: number;
};

export default function EmotionData({ imgSrc, name, count }: Props) {
  return (
    <t.Container>
      <img src={imgSrc} alt="이모티콘" />
      <p>
        {name} <span>{count}</span>
      </p>
    </t.Container>
  );
}

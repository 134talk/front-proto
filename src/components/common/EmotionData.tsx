import { useEffect, useState } from 'react';
import { EMOTION_MAPPINGS } from 'shared/constants/constants';
import * as t from './emotionData.style';

type Props = {
  name: string;
  count: number;
};

export default function EmotionData({ name, count }: Props) {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    if (EMOTION_MAPPINGS.hasOwnProperty(name)) {
      const { img } = EMOTION_MAPPINGS[name];
      setImgSrc(img);
    }
  }, [name]);

  return (
    <t.Container>
      <img src={imgSrc} alt="이모티콘" />
      <p>
        {name} <span>{count}</span>
      </p>
    </t.Container>
  );
}

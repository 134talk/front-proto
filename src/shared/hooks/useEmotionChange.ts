import { useEffect, useState } from 'react';
import type { Emotion } from 'shared/store/chatSlice';

export default function useEmotionCountChanged(newList: Emotion[] | null) {
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (newList && Array.isArray(newList)) {
      const storedEmotionList: Emotion[] = JSON.parse(
        localStorage.getItem('emotionList') || '[]'
      );
      const isCountChanged = isEmotionCountChanged(storedEmotionList, newList);
      localStorage.setItem('emotionList', JSON.stringify(newList));
      setIsChanged(isCountChanged);
      if (isCountChanged) localStorage.setItem('emotionKey', 'true');
    }
  }, [newList]);

  return isChanged;
}

function isEmotionCountChanged(
  oldList: Emotion[],
  newList: Emotion[]
): boolean {
  const mergedList = [...oldList, ...newList];
  for (const item of mergedList) {
    const oldItem = oldList.find(old => old.emoticonCode === item.emoticonCode);
    const newItem = newList.find(
      newEmotion => newEmotion.emoticonCode === item.emoticonCode
    );
    if (oldItem === undefined) {
      return true;
    }
    if (!oldItem || !newItem) {
      return true;
    }
    if (oldItem?.emoticonCount !== newItem?.emoticonCount) {
      return true;
    }
  }
  return false;
}

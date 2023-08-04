import { useEffect, useState } from 'react';
import { REPORT_MAPPINGS } from 'shared/constants/constants';

export default function useChartIcons(text: string) {
  const [selectedImg, setSelectedImg] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    if (REPORT_MAPPINGS.hasOwnProperty(text)) {
      const { img, color } = REPORT_MAPPINGS[text];
      setSelectedImg(img);
      setSelectedColor(color);
    }
  }, [text]);

  return { selectedImg, selectedColor };
}

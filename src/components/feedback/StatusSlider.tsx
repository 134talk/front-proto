import {
  MINUS_ICON,
  PLUS_BLACK_ICON,
  SLIDER_IMAGE,
  SLIDER_VERTICAL_IMAGE,
} from 'shared/constants/icons';
import * as t from './statusSlider.style';

interface StatusSliderProps {
  minValue: number;
  maxValue: number;
  value: number;
  isRow: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // handlePlusMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  // handleMinusMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  // handleMouseUp?: React.MouseEventHandler<HTMLButtonElement>;
  handlePlusMouseDown?: (e: React.MouseEvent | React.TouchEvent) => void;
  handleMinusMouseDown?: (e: React.MouseEvent | React.TouchEvent) => void;
  handleMouseUp?: (e: React.MouseEvent | React.TouchEvent) => void;
}
export default function StatusSlider({
  minValue,
  maxValue,
  value,
  isRow,
  onChange,
  handlePlusMouseDown,
  handleMinusMouseDown,
  handleMouseUp,
}: StatusSliderProps) {
  return (
    <t.Container $isRow={isRow}>
      {!isRow && (
        <button
          onMouseDown={handlePlusMouseDown}
          onTouchStart={handlePlusMouseDown}
          onTouchEnd={handleMouseUp}
          onMouseUp={handleMouseUp}
        >
          <img src={PLUS_BLACK_ICON} alt="plus" />
        </button>
      )}
      <t.SliderWrapper $isRow={isRow}>
        <img
          className="slider_image"
          src={isRow ? SLIDER_IMAGE : SLIDER_VERTICAL_IMAGE}
          alt="slider"
        />
        <t.SliderInput
          type="range"
          min={minValue}
          max={maxValue}
          value={value}
          onChange={onChange}
          $track={((value - minValue) / (maxValue - minValue)) * 100}
          $isRow={isRow}
        />
      </t.SliderWrapper>
      {!isRow && (
        <button
          onMouseDown={handleMinusMouseDown}
          onTouchStart={handleMinusMouseDown}
          onTouchEnd={handleMouseUp}
          onMouseUp={handleMouseUp}
        >
          <img src={MINUS_ICON} alt="minus" />
        </button>
      )}
    </t.Container>
  );
}

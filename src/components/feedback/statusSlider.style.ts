import { styled } from 'styled-components';

export const Container = styled.div<{ $isRow: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${props => (props.$isRow ? '0' : '1.25rem auto')};
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.625rem 0.875rem;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.gray200};
    background: ${({ theme }) => theme.white};
    box-shadow: 3px 4px 6px 0px ${({ theme }) => theme.blue_shadow};
    &:nth-child(1) {
      margin-bottom: 1rem;
    }
    &:nth-child(3) {
      margin-top: 0.5rem;
    }
  }
`;
export const SliderWrapper = styled.div<{ $isRow: boolean }>`
  height: ${props => (props.$isRow ? '2.938rem' : '18.688rem')};
  width: ${props => (props.$isRow ? '18.688rem' : '2.938rem')};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  .slider_image {
    object-fit: contain;
  }
`;
export const SliderInput = styled.input<{ $track: number; $isRow: boolean }>`
  margin-top: -0.56rem;
  background: ${props =>
    `linear-gradient(to right, ${props.theme.good_blue} 0%, ${props.theme.good_blue} ${props.$track}%, ${props.theme.gray200} ${props.$track}%, ${props.theme.gray200} 100%)`};
  position: absolute;
  height: 1.1875rem;
  width: 16.9375rem;
  outline: none;
  appearance: none;
  border-radius: 7.5rem;
  transform: ${props => (props.$isRow ? 'rotate(0deg)' : 'rotate(270deg)')};
  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 36px;
    background: ${({ theme }) => theme.light_blue};
    box-shadow: 0px 4px 4px 0px ${({ theme }) => theme.blue_shadow};
    cursor: pointer;
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 36px;
    background: ${({ theme }) => theme.light_blue};
    box-shadow: 0px 4px 4px 0px ${({ theme }) => theme.blue_shadow};
    cursor: pointer;
  }
  &::-ms-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 36px;
    background: ${({ theme }) => theme.light_blue};
    box-shadow: 0px 4px 4px 0px ${({ theme }) => theme.blue_shadow};
    cursor: pointer;
  }
`;

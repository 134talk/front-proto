import { styled } from 'styled-components';

export const Container = styled.div<{ scale: 'small' | 'medium' | 'large' }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${props =>
    (props.scale === 'small' && '0.75rem') ||
    (props.scale === 'medium' && '0.75rem') ||
    (props.scale === 'large' && '1rem')};
`;
export const NameWrapper = styled.div<{ isRow: boolean }>`
  display: flex;
  flex-direction: ${props => (props.isRow ? 'row' : 'column')};
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
    > span {
      padding: 0.125rem 0.5rem;
      font-size: 0.75rem;
      font-weight: bold;
      border-radius: 50px;
      background-color: #f1f3f5;
    }
  }
`;
export const NicknameText = styled.p<{ scale: 'small' | 'medium' | 'large' }>`
  margin-right: ${props =>
    (props.scale === 'small' && '0.25rem') ||
    (props.scale === 'medium' && '0.375rem') ||
    (props.scale === 'large' && '0')};
  font-size: ${props =>
    (props.scale === 'small' && '0.875rem') ||
    (props.scale === 'medium' && '1rem') ||
    (props.scale === 'large' && '1.125rem')};
  font-weight: bold;
`;
export const NameText = styled.p<{ scale: 'small' | 'medium' | 'large' }>`
  margin-top: ${props =>
    (props.scale === 'small' && '0.125rem') ||
    (props.scale === 'medium' && '0.313rem') ||
    (props.scale === 'large' && '0.5rem')};
  font-size: ${props =>
    (props.scale === 'small' && '0.75rem') ||
    (props.scale === 'medium' && '0.875rem') ||
    (props.scale === 'large' && '0.875rem')};
  font-weight: normal;
  color: #475467;
`;

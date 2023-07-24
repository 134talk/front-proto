import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 32px;
  padding: 0px 20px;
  background: ${({ theme }) => theme.white};
  border-bottom: ${({ theme }) => `1px solid ${theme.gray300}`};
  box-shadow: 0px 2px 6px 0px rgba(172, 173, 177, 0.1);
  z-index: 99;
`;

export const Nav = styled.button<{ $isActive: boolean }>`
  width: calc(100% / 4);
  color: ${({ theme }) => theme.gray800};
  text-align: center;
  font-size: ${({ theme }) => theme.fs12};
  font-weight: ${({ theme }) => theme.fw400};
  background: ${({ theme }) => theme.white};
  border-bottom: ${({ theme, $isActive }) =>
    $isActive && `2px solid ${theme.gray800}`};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

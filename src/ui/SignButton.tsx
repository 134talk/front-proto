import { useState } from 'react';
import {
  ADMIN_ACTIVE_ICON,
  ADMIN_ICON,
  USER_ACTIVE_ICON,
  USER_ICON,
} from 'shared/constants/icons';
import * as t from './signButton.style';

type Props = {
  isAdmin: boolean;
  onClick: () => void;
};

export default function SignButton({ isAdmin, onClick }: Props) {
  const [isIconActive, setIsIconActive] = useState(false);
  const toggleIconActive = () => setIsIconActive(prev => !prev);

  return (
    <t.Container
      onMouseEnter={toggleIconActive}
      onMouseLeave={toggleIconActive}
      onClick={onClick}
    >
      {isAdmin ? (
        <>
          <img
            src={isIconActive ? ADMIN_ACTIVE_ICON : ADMIN_ICON}
            alt={'관리자 회원 등록'}
          />
          관리자 회원 등록
        </>
      ) : (
        <>
          <img
            src={isIconActive ? USER_ACTIVE_ICON : USER_ICON}
            alt={'일반 회원 등록'}
          />
          일반 회원 등록
        </>
      )}
    </t.Container>
  );
}

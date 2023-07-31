import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NEW_BADGE_ICON } from 'shared/constants/icons';
import useUserData from 'shared/hooks/useUserData';
import { createRoom } from 'shared/store/chatAction';
import { setCreateRoom } from 'shared/store/chatSlice';
import { useAppDispatch, useAppSelector } from 'shared/store/store';
import * as t from './nav.style';

export default function Nav() {
  const navigate = useNavigate();
  let { pathname } = useLocation();

  const [isNewChat, setIsNewChat] = useState(false);

  const { uId } = useUserData();

  const dispatch = useAppDispatch();
  const { type } = useAppSelector(state => state?.chat?.createRoom);

  useEffect(() => {
    if (type === 'new') setIsNewChat(true);
  }, [type]);

  useEffect(() => {
    dispatch({ type: 'connect' });
    dispatch(createRoom('createRoom'));
  }, [dispatch, uId]);

  const onChatPage = () => {
    setIsNewChat(false);
    dispatch(setCreateRoom({ type: '' }));
    navigate('/chats');
  };

  return (
    <t.Container>
      <t.Nav $isActive={pathname === '/chats'} onClick={onChatPage}>
        대화
        {isNewChat && <img src={NEW_BADGE_ICON} alt="새 대화" />}
      </t.Nav>
      <t.Nav
        $isActive={pathname === '/channel'}
        onClick={() => navigate('/channel')}
      >
        참가자
      </t.Nav>
      <t.Nav
        $isActive={pathname === '/report' || pathname === '/report-detail'}
        onClick={() => navigate('/report')}
      >
        리포트
      </t.Nav>
      <t.Nav
        $isActive={pathname === '/user'}
        onClick={() => navigate('/user?tab=info')}
      >
        마이
      </t.Nav>
    </t.Container>
  );
}

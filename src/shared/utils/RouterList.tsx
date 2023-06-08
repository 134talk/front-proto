import {
  ChatListPage,
  ChatPage,
  KakaoPage,
  LogInPage,
  MembersPage,
  NicknameGuidePage,
  NicknamePage,
  NicknameResultPage,
  ReportDetailPage,
  ReportPage,
  SignPage,
  SignSelectPage,
  UserPage,
} from 'pages';
import React from 'react';

interface RouterData {
  id: number;
  path: string;
  isTab: boolean;
  element: React.ReactNode;
}

export const AuthRouter: RouterData[] = [
  {
    id: 0,
    path: '/channel/:channelId/:tabId',
    isTab: true,
    element: <MembersPage />,
  },
  {
    id: 1,
    path: '/sign',
    isTab: false,
    element: <SignSelectPage />,
  },
  {
    id: 2,
    path: '/sign/:type',
    isTab: false,
    element: <SignPage />,
  },
  {
    id: 3,
    path: '/nickname/guide',
    isTab: false,
    element: <NicknameGuidePage />,
  },
  {
    id: 4,
    path: '/nickname/:type',
    isTab: false,
    element: <NicknamePage />,
  },
  {
    id: 5,
    path: '/nickname/result',
    isTab: false,
    element: <NicknameResultPage />,
  },
  {
    id: 6,
    path: '/chats/:channelId/:tabId',
    isTab: true,
    element: <ChatListPage />,
  },
  {
    id: 7,
    path: '/chat/:chatId',
    isTab: false,
    element: <ChatPage />,
  },
  {
    id: 8,
    path: '/report/:channelId/:tabId',
    isTab: true,
    element: <ReportPage />,
  },
  {
    id: 9,
    path: '/report/:channelId/:category/:tabId',
    isTab: true,
    element: <ReportDetailPage />,
  },
  {
    id: 10,
    path: '/user/:userId/:tabId',
    isTab: true,
    element: <UserPage />,
  },
];

export const BaseRouter: RouterData[] = [
  {
    id: 0,
    path: '/',
    isTab: false,
    element: <LogInPage />,
  },
  {
    id: 1,
    path: '/oauth/callback/kakao',
    isTab: false,
    element: <KakaoPage />,
  },
];

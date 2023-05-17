import ChatListPage from 'pages/ChatListPage';
import ChatPage from 'pages/ChatPage';
import LogInPage from 'pages/LogInPage';
import MembersPage from 'pages/MembersPage';
import NicknameGuidePage from 'pages/NicknameGuidePage';
import NicknamePage from 'pages/NicknamePage';
import NicknameResultPage from 'pages/NicknameResultPage';
import ReportPage from 'pages/ReportPage';
import SignPage from 'pages/SignPage';
import SignSelectPage from 'pages/SignSelectPage';
import UserPage from 'pages/UserPage';
import React from 'react';

interface RouterData {
  id: number;
  path: string;
  element: React.ReactNode;
}

export const AuthRouter: RouterData[] = [
  {
    id: 0,
    path: '/:channelId',
    element: <MembersPage />,
  },
  {
    id: 1,
    path: '/sign',
    element: <SignSelectPage />,
  },
  {
    id: 2,
    path: '/sign/:type',
    element: <SignPage />,
  },
  {
    id: 3,
    path: '/nickname/guide',
    element: <NicknameGuidePage />,
  },
  {
    id: 4,
    path: '/nickname/:type',
    element: <NicknamePage />,
  },
  {
    id: 5,
    path: '/nickname/result',
    element: <NicknameResultPage />,
  },
  {
    id: 6,
    path: '/channel/:channelId',
    element: <ChatListPage />,
  },
  {
    id: 7,
    path: '/chat/:chatId',
    element: <ChatPage />,
  },
  {
    id: 8,
    path: '/report',
    element: <ReportPage />,
  },
  {
    id: 9,
    path: '/user',
    element: <UserPage />,
  },
];

export const BaseRouter: RouterData[] = [
  {
    id: 0,
    path: '/login',
    element: <LogInPage />,
  },
];

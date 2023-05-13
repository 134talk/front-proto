import ChatListPage from 'pages/ChatListPage';
import ChatPage from 'pages/ChatPage';
import LogInPage from 'pages/LogInPage';
import MembersPage from 'pages/MembersPage';
import NicknamePage from 'pages/NicknamePage';
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
    path: '/nickname',
    element: <NicknamePage />,
  },
  {
    id: 4,
    path: '/channel/:channelId',
    element: <ChatListPage />,
  },
  {
    id: 5,
    path: '/chat/:chatId',
    element: <ChatPage />,
  },
  {
    id: 6,
    path: '/report',
    element: <ReportPage />,
  },
  {
    id: 7,
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

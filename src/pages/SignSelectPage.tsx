import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignSelectPage() {
  const navigate = useNavigate();
  const handleNavigate = (link: string) => navigate(link);

  return (
    <div>
      <button onClick={() => handleNavigate('/sign/general')}>
        일반 회원 등록
      </button>
      <button onClick={() => handleNavigate('/sign/admin')}>
        관리자 회원 등록
      </button>
    </div>
  );
}

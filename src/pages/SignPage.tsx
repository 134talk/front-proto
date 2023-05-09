import React from 'react';
import { useParams } from 'react-router-dom';

//TODO: 일반 회원 미입력시 버튼 비활성
//TODO: 일반 회원 취소 버튼 라우팅

//TODO: 관리자 회원 미입력시 버튼 비활성
//TODO: 관리자 회원 취소 버튼 라우팅

export default function SignPage() {
  const { type } = useParams();

  return (
    <div>
      {type === 'general' ? (
        <>
          <p>일반 회원 등록하기</p>
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="채널코드" />
        </>
      ) : (
        <>
          <p>관리자 회원 등록하기</p>
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="소속" />
        </>
      )}
      <button>등록하기</button>
      <button>취소</button>
    </div>
  );
}

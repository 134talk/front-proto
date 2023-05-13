import type { Dispatch, SetStateAction } from 'react';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function MembersPage() {
  const [isModalOpen, setModalIsOpen] = useState(false);
  //TODO: <GET 참가자 목록 조회>

  const handleModal = () => setModalIsOpen(prev => !prev);

  return (
    <div>
      {isModalOpen && <Modal setModalIsOpen={setModalIsOpen} />}
      <p>참가자(1)</p>
      <button onClick={handleModal}>채널 초대</button>
      <input type="text" placeholder="닉네임 또는 이름으로 검색" />
      {/* TODO: 프로필 이미지 추가 */}
      <p>닉네임</p>
      <p>이름</p>
    </div>
  );
}

type Props = {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
};

function Modal({ setModalIsOpen }: Props) {
  const location = useLocation();
  const handleClose = () => setModalIsOpen(false);

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={handleClose}>닫기</button>
      <button>카카오톡 친구 목록에서 초대</button>
      <button
        onClick={() =>
          handleCopyClipBoard(
            `${process.env.REACT_APP_BASE_URL}/login?channel=${location.pathname}`
          )
        }
      >
        링크 복사
      </button>
    </div>
  );
}

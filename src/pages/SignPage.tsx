import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NAME_REGEX } from 'shared/constants/constants';

const validateName = (name: string): boolean => NAME_REGEX.test(name);

export default function SignPage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [team, setTeam] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleCancel = () => navigate('/sign');
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let spacesRemovedName = e.target.value.replace(/\s/g, '');
    setName(spacesRemovedName);
  };
  const handleTeam = (e: React.ChangeEvent<HTMLInputElement>) => {
    let spacesRemovedTeam = e.target.value.replace(/\s/g, '');
    setTeam(spacesRemovedTeam);
  };

  useEffect(() => {
    setIsValid(validateName(name));
  }, [name]);

  return (
    <div>
      {type === 'user' ? (
        <>
          <p>일반 회원 등록</p>
          <input type="text" placeholder="이름" onChange={handleName} />
          {!!name.length && !isValid && <span>에러</span>}
          <input type="text" placeholder="채널코드" onChange={handleTeam} />
        </>
      ) : (
        <>
          <p>관리자 회원 등록</p>
          <input type="text" placeholder="이름" onChange={handleName} />
          {!!name.length && !isValid && <span>에러</span>}
          <input type="text" placeholder="소속" onChange={handleTeam} />
        </>
      )}
      <button disabled={!name.length || !team.length}>등록</button>
      <button onClick={handleCancel}>취소</button>
    </div>
  );
}

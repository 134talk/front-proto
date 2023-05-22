import { SignButtonColumn, SignInputColumn, Title } from 'components';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NAME_REGEX } from 'shared/constants/constants';
import { ADMIN_ICON, SMILE_ICON, USER_ICON } from 'shared/constants/icons';
import * as t from './signPage.style';

const validateName = (name: string): boolean => NAME_REGEX.test(name);

export default function SignPage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [team, setTeam] = useState('');

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let spacesRemovedName = e.target.value.replace(/\s/g, '');
    setName(spacesRemovedName);
  };
  const handleTeam = (e: React.ChangeEvent<HTMLInputElement>) => {
    let spacesRemovedTeam = e.target.value.replace(/\s/g, '');
    setTeam(spacesRemovedTeam);
  };

  const handleCancel = () => navigate('/sign');

  return (
    <t.Container>
      <section>
        <p>회원 등록하고, 인사 나눠요</p>
        <img src={SMILE_ICON} alt="웃는 아이콘" />
      </section>
      <Title
        text={type === 'user' ? '일반 회원 등록' : '관리자 회원 등록'}
        icon={type === 'user' ? USER_ICON : ADMIN_ICON}
      />
      <SignInputColumn
        isAdmin={type === 'admin'}
        isName={!!name.length}
        isError={!!name.length && !validateName(name)}
        handleName={handleName}
        handleTeam={handleTeam}
      />
      <SignButtonColumn
        name={name}
        team={team}
        disabled={!name.length || !team.length || !validateName(name)}
        handleCancel={handleCancel}
      />
    </t.Container>
  );
}

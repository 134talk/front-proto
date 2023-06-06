import { SignButtonColumn, SignInputColumn, Title } from 'components';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NAME_REGEX } from 'shared/constants/constants';
import { ADMIN_ICON, USER_ICON } from 'shared/constants/icons';
import useSign from 'shared/query/useSign';
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

  const { onSignUser, onSignAdmin } = useSign();

  const onRegister = () =>
    type === 'user'
      ? onSignUser({ name: name, team: team })
      : onSignAdmin({ name: name, team: team });

  const onCancel = () => navigate('/sign');

  return (
    <t.Container>
      <section>
        <p>회원 등록하고, 인사 나눠요 😆</p>
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
        disabled={!name.length || !team.length || !validateName(name)}
        onRegister={onRegister}
        onCancel={onCancel}
      />
    </t.Container>
  );
}

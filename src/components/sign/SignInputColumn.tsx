import { Input } from 'ui';
import Message from './Message';
import * as t from './signInputColumn.style';

type Props = {
  isAdmin: boolean;
  isName: boolean;
  team: string;
  isError: boolean;
  handleName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTeam: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SignInputColumn({
  isAdmin,
  isName,
  team,
  isError,
  handleName,
  handleTeam,
}: Props) {
  return (
    <t.Container>
      <section>
        <Input placeholder="이름" onChange={handleName} />
        <Message
          isError={isError}
          isValue={isName}
          text="사용할 수 있는 이름입니다."
        />
      </section>
      <section>
        <Input
          placeholder={isAdmin ? '소속' : '채널 코드'}
          onChange={handleTeam}
          defaultValue={isAdmin ? '' : team}
        />
        <Message
          isError={false}
          isValue={!!team}
          text="유효한 채널 코드입니다."
        />
      </section>
    </t.Container>
  );
}

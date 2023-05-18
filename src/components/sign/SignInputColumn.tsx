import { Input } from 'ui';
import Message from './Message';
import * as t from './signInputColumn.style';

type Props = {
  isAdmin: boolean;
  isName: boolean;
  isError: boolean;
  handleName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTeam: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SignInputColumn({
  isAdmin,
  isName,
  isError,
  handleName,
  handleTeam,
}: Props) {
  return (
    <t.Container>
      <section>
        <Input placeholder="이름" onChange={handleName} />
        <Message isError={isError} isName={isName} />
      </section>
      <section>
        <Input
          placeholder={isAdmin ? '소속' : '채널 코드'}
          onChange={handleTeam}
        />
      </section>
    </t.Container>
  );
}

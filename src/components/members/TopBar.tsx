import { SHARE_ICON } from 'shared/constants/icons';
import { styled } from 'styled-components';
import { Button } from 'ui';

type Props = {
  userCnt: number;
  handleModal: () => void;
};

export default function TopBar({ userCnt, handleModal }: Props) {
  return (
    <Container>
      <p>
        참가자 <span>({userCnt})</span>
      </p>
      <section>
        <Button category="confirm" {...styleProps} onClick={handleModal}>
          <img src={SHARE_ICON} alt="채널 초대" /> 채널 초대
        </Button>
      </section>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  section {
    width: 6rem;
    height: 1.875rem;
  }
  p {
    font-size: 1.25rem;
    font-weight: 700;
    color: #000000;
    span {
      font-weight: 400;
    }
  }
`;

const styleProps = {
  fontSize: '0.875rem',
  padding: '0.375rem 0',
};

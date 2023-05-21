import {
  CLOSE_ICON,
  PLUS_ICON,
  PREV_ICON,
  SETTING_ICON,
  SHARE_ICON,
} from 'shared/constants/icons';
import { Button } from 'ui';
import * as t from './navBar.style';

type Props = {
  isCenter: boolean;
  isNav?: boolean;
  title: string;
  cnt?: string;
  button?: '채널 초대' | '새 대화방' | '닫기';
  isAdmin?: boolean;
  handleNav?: () => void;
  handleInviteModal?: () => void;
  handleCreateModal?: () => void;
  handleClose?: () => void;
};

export default function NavBar({
  isCenter,
  isNav,
  title,
  cnt,
  button,
  isAdmin,
  handleNav,
  handleInviteModal,
  handleCreateModal,
  handleClose,
}: Props) {
  return (
    <>
      {isCenter ? (
        <t.Container className="center">
          {isNav && <img src={PREV_ICON} alt="뒤로가기" onClick={handleNav} />}
          <p>{title}</p>
        </t.Container>
      ) : (
        <t.Container>
          <div className="wrapper">
            {isNav && (
              <img src={PREV_ICON} alt="뒤로가기" onClick={handleNav} />
            )}
            <p>
              {title} {cnt && <span>({cnt})</span>}
            </p>
          </div>
          {button === '채널 초대' && (
            <section>
              <Button
                category="confirm"
                {...styleProps}
                onClick={handleInviteModal}
              >
                <img src={SHARE_ICON} alt="채널 초대" /> 채널 초대
              </Button>
            </section>
          )}
          {button === '새 대화방' && (
            <div className="wrapper">
              {isAdmin && <img src={SETTING_ICON} alt="설정" />}
              <section>
                <Button
                  category="confirm"
                  {...styleProps}
                  onClick={handleCreateModal}
                >
                  <img src={PLUS_ICON} alt="새 대화방" /> 새 대화방
                </Button>
              </section>
            </div>
          )}
          {button === '닫기' && (
            <img src={CLOSE_ICON} alt="닫기" onClick={handleClose} />
          )}
        </t.Container>
      )}
    </>
  );
}

const styleProps = {
  fontSize: '0.875rem',
  padding: '0.375rem 0',
};

import { BaseModal } from 'components';
import { IOS_SHARE_ICON } from 'shared/constants/icons';
import type { ModalActions } from 'shared/hooks/useModal';
import * as t from './installModal.style';

type InstallModalProps = {
  modalActions: ModalActions;
};
export default function InstallModal({ modalActions }: InstallModalProps) {
  return (
    <BaseModal isCloseButton>
      <t.Container onClick={modalActions.close}>
        <p className="title_text">134 앱을 다운받는 방법</p>
        <p className="sub_text">1. 브라우저 상단 또는 하단의</p>
        <p className="sub_text">
          <span>앱 공유하기</span>
          <img src={IOS_SHARE_ICON} alt="ios-share" /> 버튼을 눌러주세요.
        </p>
        <p className="sub_text">
          2. <span>홈 화면에 추가</span>
          를 누르고 앱을 <br />
          추가해주세요.
        </p>
      </t.Container>
    </BaseModal>
  );
}

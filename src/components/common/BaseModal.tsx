import React from 'react';
import { CLOSE_BLACK } from 'shared/constants/icons';
import * as t from './baseModal.style';

type Props = {
  isCloseButton?: boolean;
  children: React.ReactNode;
  onClose?: () => void;
};

export default function BaseModal({ isCloseButton, children, onClose }: Props) {
  return (
    <t.Container>
      <div className="wrapper">
        {isCloseButton && (
          <section>
            <img src={CLOSE_BLACK} alt="닫기" onClick={onClose} />
          </section>
        )}
        {children}
      </div>
    </t.Container>
  );
}

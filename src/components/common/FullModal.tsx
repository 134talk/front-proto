import React from 'react';
import * as t from './fullModal.style';

type Props = {
  children: React.ReactNode;
};

export default function FullModal({ children }: Props) {
  return (
    <>
      <t.Background />
      <t.Container>{children}</t.Container>
    </>
  );
}

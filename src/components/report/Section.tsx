import React from 'react';
import * as t from './section.style';

type Props = {
  children: React.ReactNode;
};

export default function Section({ children }: Props) {
  return <t.Container>{children}</t.Container>;
}

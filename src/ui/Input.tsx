import React from 'react';
import * as t from './input.style';

type Props = {
  placeholder: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: Props) {
  return <t.Container {...props} />;
}

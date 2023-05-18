import * as t from './radioSelection.style';

type Props = {
  id: number;
  exValue: string;
  option: string;
  handleChange: () => void;
};

export default function RadioSelection({
  id,
  exValue,
  option,
  handleChange,
}: Props) {
  return (
    <t.Container>
      <input
        type="radio"
        name="option"
        value={id}
        id={id.toString()}
        onChange={handleChange}
        defaultChecked={parseInt(exValue) === id}
      />
      <label htmlFor={id.toString()}>{option}</label>
    </t.Container>
  );
}

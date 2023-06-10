import { FadeLoader } from 'react-spinners';
import * as t from './spinner.style';

interface SpinnerProps {
  isLoading?: boolean;
}

export default function Spinner(props: SpinnerProps) {
  return (
    <t.Container>
      {props.isLoading && (
        <FadeLoader
          color={'#7588EA'}
          height={10}
          margin={-5}
          width={3}
          cssOverride={{
            marginLeft: '20px',
            marginTop: '10px',
          }}
        />
      )}
    </t.Container>
  );
}

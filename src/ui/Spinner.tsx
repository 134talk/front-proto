import { ClipLoader } from 'react-spinners';
import { styled } from 'styled-components';

interface SpinnerProps {
  isLoading?: boolean;
}

export default function Spinner(props: SpinnerProps) {
  return (
    <Container>
      {props.isLoading && <ClipLoader color={'#000'} size={30} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.375rem;
  margin-bottom: 0.625rem;
`;

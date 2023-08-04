import { FadeLoader } from 'react-spinners';
import { styled } from 'styled-components';

interface Props {
  isLoading?: boolean;
}

export default function Spinner(props: Props) {
  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem auto;
`;

import { useIsFetching, useIsMutating } from 'react-query';
import { ClipLoader } from 'react-spinners';
import theme from 'shared/styles/theme';
import { styled } from 'styled-components';

export default function Loader() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const display = isFetching || isMutating ? 'inherit' : 'none';

  return (
    <Container display={display}>
      <ClipLoader color={theme.primary_blue} size="50px" />
    </Container>
  );
}

const Container = styled.div<{ display: string }>`
  display: ${({ display }) => display};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

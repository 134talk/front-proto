import { useIsFetching, useIsMutating } from 'react-query';
import { ClipLoader } from 'react-spinners';
import theme from 'shared/styles/theme';
import * as t from './loader.style';

export default function Loader() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const display = isFetching || isMutating ? 'inherit' : 'none';

  return (
    <t.Container display={display}>
      <ClipLoader color={theme.primary_blue} size="50px" />
    </t.Container>
  );
}

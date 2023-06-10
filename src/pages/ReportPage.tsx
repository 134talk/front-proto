import { NavBar, ReportBox } from 'components';
import { InnerBackground } from 'ui';
import * as t from './reportPage.style';

export default function ReportPage() {
  return (
    <>
      <NavBar isCenter={true} title="리포트" />
      <t.Container>
        <InnerBackground />
        <div className="wrapper">
          <ReportBox />
        </div>
      </t.Container>
    </>
  );
}

import React from 'react';

import { CalendarRow } from '../../molecules/calendar-row/calendar-row';
import { meetingRowMock } from '../../../../mock/meetingRow'

const blockName = 'main';

export class Main extends React.PureComponent<any> {

  render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

    return <CalendarRow meetings={meetingRowMock} />;
  }
}

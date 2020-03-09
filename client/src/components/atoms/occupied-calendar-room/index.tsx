import React from 'react';
import moment from 'moment';

import './occupied-calendar-room.scss';

export interface OccupiedCalendarRoomProps {
  name: string,
  startTime: string,
  endTime: string,
  duration: number,
}

const blockName = 'occupied-calendar-room';

export class OccupiedCalendarRoom extends React.PureComponent<OccupiedCalendarRoomProps> {
  private name: string | undefined;
  private startTime: string | undefined;
  private endTime: string | undefined;
  private duration: number | undefined;


  render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const { name, startTime, endTime } = this.props;

    return <div className={blockName}>
      {startTime} - {name} - {endTime}
    </div>;
  }
}

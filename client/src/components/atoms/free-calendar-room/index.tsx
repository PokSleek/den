import React from 'react';

import './free-calendar-room.scss';

export interface FreeCalendarRoomProps {
  startTime: string,
  endTime: string,
  duration: number
}

const blockName = 'free-calendar-room';

export class FreeCalendarRoom extends React.PureComponent<FreeCalendarRoomProps> {
  private startTime: string | undefined;
  private endTime: string | undefined;
  private duration: number | undefined;

  render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const { startTime, endTime } = this.props;

    return <div className={blockName}>
      {startTime} -- {endTime}
    </div>;
  }
}

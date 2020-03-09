import React from 'react';
import moment from 'moment';

import './calendar-meeting.scss';

export interface CalendarMeetingProps {
  meetingRoom: string,
  date: string,
  startTime: string,
  endTime: string,

  durationInMinutes?: number
  name?: string,
  participants?: Array<Object>
}

const blockName = 'calendar-meeting';

export class CalendarMeeting extends React.PureComponent<CalendarMeetingProps> {

  private readonly blockName: string;
  private readonly style: { width: string };

  constructor(props: CalendarMeetingProps) {
    super(props);
    const { startTime, endTime, name } = this.props;

    const start = moment.duration(startTime).asMinutes();
    const end = moment.duration(endTime).asMinutes();

    this.style = { width: `${end - start}px` };
    this.blockName = `${blockName}__${name ? 'occupied' : 'free'}`;
  }

  render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const { startTime, endTime, name } = this.props;

    return <div className={this.blockName} style={this.style}>
      {startTime} - {name} - {endTime}
    </div>
  }
}

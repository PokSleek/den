import get from 'lodash/get';
import React from 'react';
import moment from 'moment';

// import { CalendarRowBlock } from '../../atoms/calendar-row-block/CalendarRowBlock';

import { FreeCalendarRoom } from '../../atoms/free-calendar-room';
import { OccupiedCalendarRoom } from '../../atoms/occupied-calendar-room';

import './calendar-row.scss';


export interface CalendarRowProps {
  meetings: Array<MeetingProps>,
}

export interface MeetingProps {
  name: string,
  startTime: string,
  endTime: string
}

const blockName = 'calendar-row';

export class CalendarRow extends React.PureComponent<CalendarRowProps> {
  private meetings: Array<Object> | undefined;

  parseRowData() {
    const { meetings } = this.props;
    console.log('meetings :: ', meetings);

    let startTime = 0;
    let endTime = 1440;

    for (let i = 0; i < meetings.length; i++) {
      const start = moment.duration(meetings[i].startTime).asMinutes();
      const end = moment.duration(meetings[i].endTime).asMinutes();


      if (startTime < start) {
        console.log('start :: ', startTime);
        console.log('end :: ', start);
        const blockWidth = start - startTime;
        const amountOfFreeRooms = blockWidth / 60;
        console.log('amountOfFreeRooms :: ', amountOfFreeRooms);
      }

      startTime = end;
    }

    if (startTime < endTime) {
      console.log('start :: ', startTime);
      console.log('end :: ', endTime);
      const amountOfFreeRooms = (endTime - startTime) / 60;
      console.log('amountOfFreeRooms :: ', amountOfFreeRooms);
    }


    return null;
  }



  render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

    return <div className={blockName}>
      {this.parseRowData()}
      bla
    </div>;
  }
}


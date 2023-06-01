import { CalendarOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import BookingCalendar from "./BookingCalendar";

const BookingOverlay = () => {
        const [isCalendarActive, setIsCalendarActive] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '50%',
          left: 0,
          zIndex: 10,
        }}
      >
        <Button
          type="primary"
          size="large"
          icon={<CalendarOutlined />}
          block
          onClick={() => setIsCalendarActive(true)}
          style={{ visibility: isCalendarActive ? 'hidden' : 'visible' }}
        >
          Book Now
        </Button>
      </div>

      <BookingCalendar visible={isCalendarActive}/>
    </div>
  );
};

export default BookingOverlay;

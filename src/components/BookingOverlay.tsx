import { CalendarOutlined } from "@ant-design/icons";
import { Button, Calendar, Modal } from "antd";
import { useState } from "react";
import BookingCalendar from "./BookingCalendar";

const BookingOverlay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
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
          onClick={openModal}
        >
          Book Now
        </Button>
      </div>

        <div style={{
          filter: 'blur(2px)',
          pointerEvents: 'none'
        }}>
          <Calendar />
        </div>
    </div>
    <Modal open={isModalOpen} onCancel={closeModal} onOk={closeModal} width='75%'>
      <BookingCalendar />
    </Modal>
    </>
  );
};

export default BookingOverlay;

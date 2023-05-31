import { CalendarOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';
import { useState } from 'react';
import BookingCalendar from '../components/BookingCalendar';

const BookingInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Modal width="75%" open={isModalOpen} onOk={closeModal} onCancel={closeModal}>
        <BookingCalendar />
      </Modal>

      <Button
        type="primary"
        block
        size="large"
        shape="round"
        icon={<CalendarOutlined />}
        onClick={() => setIsModalOpen(true)}
      >
        Book Now
      </Button>
    </>
  );
};

export default BookingInfo;

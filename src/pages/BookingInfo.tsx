import { CalendarOutlined } from '@ant-design/icons';
import { Modal, Button, Typography, Divider, Space } from 'antd';
import { useState } from 'react';
import BookingCalendar from '../components/BookingCalendar';
import RatesTable from '../components/RatesTable';
import PolicyList from '../components/PolicyList';

const BookingInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  return (
    <Space direction="vertical">
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

      <Typography.Title level={3}>Policies</Typography.Title>
      <PolicyList />

      <Divider />

      <Typography.Title level={3}>Rates</Typography.Title>
      <RatesTable />
    </Space>
  );
};

export default BookingInfo;

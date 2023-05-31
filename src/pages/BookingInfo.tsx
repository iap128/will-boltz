import { Typography, Divider, Space } from 'antd';

import RatesTable from '../components/RatesTable';
import PolicyList from '../components/PolicyList';

const BookingInfo = () => {
  return (
    <Space direction="vertical">
      <Typography.Title level={3}>Policies</Typography.Title>
      <PolicyList />

      <Divider />

      <Typography.Title level={3}>Rates</Typography.Title>
      <RatesTable />
    </Space>
  );
};

export default BookingInfo;

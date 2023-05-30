import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip, Typography } from 'antd';

const Contact = () => {
  return (
    <Space direction="vertical" align="center">
      <Typography.Title>Contact</Typography.Title>

      <Space direction="horizontal">
        <Button type="primary" icon={<MailOutlined />}>
          Email
        </Button>

        <Tooltip title="123-456-7890">
          <Button type="primary" icon={<PhoneOutlined />}>
            Call
          </Button>
        </Tooltip>
      </Space>
    </Space>
  );
};

export default Contact;

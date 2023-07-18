import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip, Typography, message } from 'antd';

const Contact = () => {
  const email = 'willboltzdpe@gmail.com';
  const phone = '(303) 638-1712';

  const [messageAPI, contextHolder] = message.useMessage();

  const copyConfirmation = () => messageAPI.success('Copied to Clipboard');

  const copyText = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);

    copyConfirmation();
  };

  return (
    <Space direction="vertical" align="center">
      {contextHolder}
      <Typography.Title>Contact</Typography.Title>

      <Space direction="horizontal">
        <Button type="primary" icon={<MailOutlined />} href={`mailto:${email}`}>
          Email
        </Button>

        <Tooltip title="(303) 638-1712">
          <Button type="primary" icon={<PhoneOutlined />} onClick={() => copyText(phone)}>
            Call/Text
          </Button>
        </Tooltip>
      </Space>
    </Space>
  );
};

export default Contact;

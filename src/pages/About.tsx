import { Space, Tag, Typography, Image, Card } from 'antd';

const About = () => {
  const certificates = ['CFI', 'CFII', 'MEI', 'ATP SEL', 'ATP MEL'];

  return (
    <Card cover={<Image preview={false} src="./images/profile.jpg" />}>
      <Space direction="vertical" align="center">
        <Space direction="horizontal" wrap>
          {certificates.map(certificate => (
            <Tag bordered={false} color="processing">
              {certificate}
            </Tag>
          ))}
        </Space>

        <Typography.Text>
          Doing checks rides for single engine, instrument, multi engine, commercial, and CFI add-ons. 
          Based in Portland but doing checkrides in Oregon and Washington. 
        </Typography.Text>
      </Space>
    </Card>
  );
};

export default About;

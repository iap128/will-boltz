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
          Will earned his private pilot license in 1984 while studying business at the University of
          Arizona. In 1996, he earned his Flight Instructor license and has been career flying ever
          since. While not at work, he enjoys mountain biking with his faithful golden retriever
          Grizzly and hiking remote Oregon trails. His hobbies are gardening and skiing. Will holds
          a CFII, MEI, ATP and is a Gold Seal instructor. He is also type rated in the Citation Jet
          and has over 6000 hours total time.
        </Typography.Text>
      </Space>
    </Card>
  );
};

export default About;

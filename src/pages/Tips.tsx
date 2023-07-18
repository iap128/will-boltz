import { Space, Typography } from 'antd';

const Tips = () => {
  const listOfTips = [
    'Please be extremely familiar with everything in the ACS for your checkride. Read it cover to cover one more time shortly before your checkride.',
  ];
  return (
    <Space direction="vertical">
      <Typography.Title level={3}>Checkride Tips</Typography.Title>
      <ul>
        {listOfTips.map(tip => (
          <li>{tip}</li>
        ))}
      </ul>
    </Space>
  );
};

export default Tips;

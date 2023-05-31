import { List, Typography } from 'antd';

const PolicyList = () => {
  const data = [
    {
      title:
        'Discounts/refunds are not given for discontinuing a checkride, though I will work with you to reschedule the remaining items.',
    },
    {
      title: 'Completion of a discontinued checkride started with Will is no extra charge.',
    },
    {
      title:
        'Completion of a discontinued checkride started with another DPE is charged at the recheck rate.',
    },
    {
      title:
        'Once your checkride has been confirmed, your application in IACRA must be complete and signed no later than 48 hours prior to the start of your checkride, or your checkride will be cancelled.',
    },
  ];

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Typography.Text>{item.title}</Typography.Text>
        </List.Item>
      )}
    />
  );
};

export default PolicyList;

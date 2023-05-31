import { Typography } from 'antd';

const PolicyList = () => {
  const policy = [
    'Discounts/refunds are not given for discontinuing a checkride, though I will work with you to reschedule the remaining items.',
    'Completion of a discontinued checkride started with Will is no extra charge.',
    'Completion of a discontinued checkride started with another DPE is charged at the recheck rate.',
    'Once your checkride has been confirmed, your application in IACRA must be complete and signed no later than 48 hours prior to the start of your checkride, or your checkride will be cancelled.',
  ];

  return (
    <ul>
      {policy.map(info => {
        return (
          <li>
            <Typography.Text>{info}</Typography.Text>
          </li>
        );
      })}
    </ul>
  );
};

export default PolicyList;

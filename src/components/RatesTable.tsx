import { DollarOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Card, Statistic, Table, Tooltip } from 'antd';

const RatesTable = () => {
  const dataSource = [
    {
      key: '1',
      type: 'Checkride',
      cost: '$900',
    },
    {
      key: '2',
      type: 'Recheck (ground & flight)',
      cost: '$650',
    },
    {
      key: '3',
      type: 'Recheck (flight only)',
      cost: '$450',
    },
  ];

  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
      key: 'cost',
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false} />

      <Card style={{ margin: '15px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          }}>
        <Statistic
          title="Forms of Payment Accepted"
          value="Cash or Zelle"
          prefix={<DollarOutlined />}
        />
        <Tooltip title='Zelle is a United States–based digital payments network run by a private financial services company owned by the banks Bank of America, Truist, Capital One, JPMorgan Chase, PNC Bank, U.S. Bank, and Wells Fargo.'>
        <Button icon={<QuestionCircleOutlined />} type='text' />
        </Tooltip>
        </div>
      </Card>
    </>
  );
};

export default RatesTable;

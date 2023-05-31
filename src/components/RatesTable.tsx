import { Table } from 'antd';

const RatesTable = () => {
  const dataSource = [
    {
      key: '1',
      type: 'Checkride',
      cost: '$800',
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
    <Table dataSource={dataSource} columns={columns} pagination={false} title={() => 'Rates'} />
  );
};

export default RatesTable;

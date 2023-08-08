import { Menu, MenuProps, Button } from 'antd';
import { useState } from 'react';
import ReactGA from 'react-ga4';

const NavMenu = () => {
  const [current, setCurrent] = useState('about');

  const items: MenuProps['items'] = [
    {
      label: (
        <Button type="text" href="#about">
          About
        </Button>
      ),
      key: 'about',
    },
    {
      label: (
        <Button type="text" href="#tips">
          Checkride Tips
        </Button>
      ),
      key: 'tips',
    },
    {
      label: (
        <Button type="text" href="#policy">
          Policy
        </Button>
      ),
      key: 'policy',
    },
    {
      label: (
        <Button type="text" href="#contact">
          Contact
        </Button>
      ),
      key: 'contact',
    },
  ];

  const onClick: MenuProps['onClick'] = e => {
    ReactGA.event('Clicked Nav Menu', {pageName: e.key});
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};

export default NavMenu;

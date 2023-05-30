import { Menu, MenuProps, Button } from 'antd';
import { useState } from 'react';

const NavMenu = () => {
    const [current, setCurrent] = useState('home');

    const items: MenuProps['items'] = [
        {
            label: (
                <Button type='text' href='#home'>Home</Button>
            ),
            key: 'home'
        },
        {
            label: (<Button type='text' href='#about'>About</Button>),
            key: 'about'
        },
        {
            label: (<Button type='text' href='#contact'>Contact</Button>),
            key: 'contact'
        },
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    }

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items}/>
    )
};

export default NavMenu;
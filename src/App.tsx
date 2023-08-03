import { Button, Layout, theme } from 'antd';
import Home from './pages/Home';
import NavMenu from './components/NavMenu';
import { openURL } from './helpers/Helpers';
import './App.css';
import ReactGA from 'react-ga4';

const { Header, Footer, Content } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  ReactGA.initialize('G-S7Q653RQVZ');

  return (
    <Layout className="layout">
      <Header
        style={{
          background: colorBgContainer,
        }}
      >
        <NavMenu />
      </Header>

      <Content style={{ padding: '0 25px' }}>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          <Home />
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Created by{' '}
        <Button type="dashed" onClick={() => openURL('https://n818pe.com')}>
          Ryan Hunter
        </Button>
      </Footer>
    </Layout>
  );
}

export default App;

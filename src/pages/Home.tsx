import { Col, Divider, FloatButton, Row, Typography } from 'antd';
import About from './About';
import Contact from './Contact';
import BookingInfo from './BookingInfo';

const Home = () => {
  return (
    <>
      <Typography.Title style={{ textAlign: 'center' }}>Will Boltz - DPE</Typography.Title>

      <Divider />

      <Row gutter={16}>
        <Col span={8}>
          <div id="about">
            <About />
          </div>
        </Col>

        <Col span={16}>
          <BookingInfo />
        </Col>
      </Row>

      <Divider />

      <div
        id="contact"
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Contact />
      </div>

      <FloatButton.BackTop visibilityHeight={10} />
    </>
  );
};

export default Home;

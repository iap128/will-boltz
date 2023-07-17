import { Col, Divider, FloatButton, Row } from 'antd';
import About from './About';
import Contact from './Contact';
import BookingInfo from './BookingInfo';
import HomeBanner from '../components/HomeBanner';
import BookingOverlay from '../components/BookingOverlay';

const Home = () => {
  return (
    <>
      <HomeBanner />

      <Divider />

      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <div id="about">
            <About />
          </div>
        </Col>

        <Col xs={24} sm={24} md={24} lg={16} xl={16}>
          <BookingOverlay />
        </Col>
      </Row>

      <Divider />

      <div id="policy">
        <BookingInfo />
      </div>

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

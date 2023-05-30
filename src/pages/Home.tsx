import { Button, Col, Divider, FloatButton, Modal, Row, Typography } from "antd";
import { useState } from "react";
import BookingPage from "../components/BookingPage";
import About from "./About";
import Contact from "./Contact";
import { CalendarOutlined } from "@ant-design/icons";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);
    
    return (
        <>
        <Typography.Title>Will Boltz - DPE</Typography.Title>
        

        <Modal width='75%' open={isModalOpen} onOk={closeModal} onCancel={closeModal}>
            <BookingPage />
        </Modal>

        <Row gutter={16}>
            <Col span={8}>
                <div id="about">
                    <About />
                </div>
            </Col>

            <Col span={16}>
            <Button type="primary" block size='large' shape='round' icon={<CalendarOutlined />} onClick={() => setIsModalOpen(true)}>Book Now</Button>
            </Col>

        </Row>

        <Divider />

        <div id="contact" style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
        <Contact />
        </div>
        
        <FloatButton.BackTop visibilityHeight={10}/>
        </>
    )
};

export default Home;
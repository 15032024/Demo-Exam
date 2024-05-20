import React from 'react'
import { Grid } from "antd";
import { Col, Row } from 'antd';
import './index.scss'
const Section = () => {
    return (
        <section>
            <div className="container">
                <div className="section">
                    <div className="section-content">
                        <h2>Shop for Different Categories</h2>
                        <p>Who are in extremely love with eco friendly system.</p>
                    </div>
                    <Row gutter={20}>
                        <Col className="gutter-row" xs={24} md={12}  span={16}>
                            <Row>
                                <Col className="gutter-row" span={12}>
                                    <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg" alt="" />
                                </Col>
                                <Col className="gutter-row" span={12}>
                                    <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg" alt="" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="gutter-row">
                                    <img src="https://preview.colorlib.com/theme/shop/img/c3.jpg" alt="" />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <img src="https://preview.colorlib.com/theme/shop/img/c4.jpg" alt="" />
                        </Col>

                    </Row>


                </div>
            </div>

        </section>
    )
}

export default Section
import React from 'react'
import {Card, Carousel, Col, Layout, Rate, Row} from "antd";

const {Content} = Layout

export default function Contents() {

    return(

        <Content style={{margin:'24px 16px',padding:24,background:'#fff',minHeight:280}}>
            <div className="content">
                <Carousel autoplay>
                    <div>
                        <img alt="example" width="1440px" src="https://files.porsche.com/filestore/image/multimedia/none/992-c4-modelimage-sideshot/model/85be46ce-ba88-11e9-80c4-005056bbdc38/porsche-model.png" />
                    </div>
                    <div> <img alt="example" width="1440px" src="https://files.porsche.com/filestore/image/multimedia/none/992-c4-modelimage-sideshot/model/85be46ce-ba88-11e9-80c4-005056bbdc38/porsche-model.png" />
                    </div>
                    <div> <img alt="example" width="1440px" src="https://files.porsche.com/filestore/image/multimedia/none/992-c4-modelimage-sideshot/model/85be46ce-ba88-11e9-80c4-005056bbdc38/porsche-model.png" />
                    </div>
                    <div> <img alt="example" width="1440px" src="https://files.porsche.com/filestore/image/multimedia/none/992-c4-modelimage-sideshot/model/85be46ce-ba88-11e9-80c4-005056bbdc38/porsche-model.png" />
                    </div>
                </Carousel>
                <Row gutter={16}>
                    <Col span={6}>
                        <Card>
                            <div className="custom-image">
                                <img alt="example" width="100%" src="https://www.grandprix.co.th/wp-content/uploads/2019/10/Porsche-Taycan-The-first-all-electric-sport-car-21.jpg" />
                            </div>
                            <div className="custom-card">
                                <h3>PORSCHE TAYCAN</h3>
                                <p>www.grandprix.co.th/</p>

                            </div>
                            <Rate />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <div className="custom-image">
                                <img alt="example" width="100%" src="https://www.grandprix.co.th/wp-content/uploads/2019/10/Porsche-Taycan-The-first-all-electric-sport-car-21.jpg" />
                            </div>
                            <div className="custom-card">
                                <h3>PORSCHE TAYCAN</h3>
                                <p>www.grandprix.co.th/</p>

                            </div>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <div className="custom-image">
                                <img alt="example" width="100%" src="https://www.grandprix.co.th/wp-content/uploads/2019/10/Porsche-Taycan-The-first-all-electric-sport-car-21.jpg" />
                            </div>
                            <div className="custom-card">
                                <h3>PORSCHE TAYCAN</h3>
                                <p>www.grandprix.co.th/</p>

                            </div>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <div className="custom-image">
                                <img alt="example" width="100%" src="https://www.grandprix.co.th/wp-content/uploads/2019/10/Porsche-Taycan-The-first-all-electric-sport-car-21.jpg" />
                            </div>
                            <div className="custom-card">
                                <h3>Car </h3>
                                <p>www.grandprix.co.th/</p>

                            </div>
                        </Card>
                    </Col>
                </Row>

            </div>
        </Content>
    )

}
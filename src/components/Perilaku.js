import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;

class Perilaku extends Component {
    render() {
        return(
            <Grid className="background">
                <div className="container site-card-wrapper">
                    <Row gutter={0,20}>
                        <Col span={8}>
                            <a href="http://www.meongers.com/need-to-know/16-arti-suara-kucing">
                                <Card hoverable cover={
                                    <img 
                                    alt="arti_suara"
                                    src="https://asset.kompas.com/crops/7aaHDGi1sN1hgJhk97p06MQhmy8=/0x1:500x334/750x500/data/photo/2020/11/14/5fafbc700c9fa.jpg"/>
                                }>
                                    <Meta title="Macam Suara Kucing dan Artinya"/>
                                </Card>
                            </a>
                        </Col>
                        <Col span={8}>
                            <a href="https://bobo.grid.id/read/081718568/kenali-arti-gerakan-telinga-kucing-agar-lebih-mengerti-kucing-kesayangan?page=all#:~:text=Gerakan%20ini%20mirip%20saat%20kucing,%2C%20atau%20siap%2Dsiap%20menyerang.">
                                <Card hoverable cover={
                                    <img 
                                    alt="gerakan_telinga"
                                    src="https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/2019/01/22/1372048221.jpg"/>
                                }>
                                    <Meta title="Kenali Arti Gerakan Telinga Kucing"/>
                                </Card>
                            </a>
                        </Col>
                        <Col span={8}>
                            <a href="https://lifestyle.kompas.com/read/2021/06/06/125048220/9-perubahan-perilaku-kucing-yang-perlu-diwaspadai?page=all">
                                <Card hoverable cover={
                                    <img 
                                    alt="perilaku_waspada"
                                    src="https://asset.kompas.com/crops/Yl2FFL6n5GiI0ogFOZextjWIdDw=/0x467:640x894/750x500/data/photo/2021/06/06/60bc5fcfa81dd.jpg"/>
                                }>
                                    <Meta title="Perilaku Kucing yang Perlu Diwasapadai"/>
                                </Card>
                            </a>
                        </Col>
                    </Row>                    
                </div>
            </Grid>
        )
    }
}

export default Perilaku;


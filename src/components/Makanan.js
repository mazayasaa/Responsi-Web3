import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;

class Makanan extends Component {
    render() {
        return(
            <Grid className="background">
                <div className="container site-card-wrapper">
                    <Row gutter={0,20}>
                        <Col span={8}>
                            <a href="https://www.whiskasindonesia.com/panduan-memberi-makan/bayi-kucing/kesehatan/tip-memberi-makan">
                                <Card hoverable cover={
                                    <img 
                                    alt="tips_makanan"
                                    src="https://asset.kompas.com/crops/4aF7q7RT64t0L9egbn2Fli1H8_Q=/50x34:450x300/750x500/data/photo/2020/11/02/5fa02ad7a62ae.jpg"/>
                                }>
                                    <Meta title="Tips Memberi Makanan untuk Kucing"/>
                                </Card>
                            </a>
                        </Col>
                        <Col span={8}>
                            <a href="https://www.theweddingvowsg.com/makanan-kucing-terbaik-indonesia/">
                                <Card hoverable cover={
                                    <img 
                                    alt="rekomendasi_makanan"
                                    src="https://i2.wp.com/www.theweddingvowsg.com/wp-content/uploads/2021/04/10-Makanan-Kucing-Terbaik-2021.jpg?w=1000&ssl=1"/>
                                }>
                                    <Meta className="text-title" title="Rekomendasi Merk Makanan Kucing"/>
                                </Card>
                            </a>
                        </Col>
                        <Col span={8}>
                            <a href="https://petpintar.com/kucing/makanan-dilarang-untuk-kucing">
                                <Card hoverable cover={
                                    <img 
                                    alt="dilarang_makanan"
                                    src="https://cdn.idntimes.com/content-images/post/20200825/1-267e86e3cc9e8030411ea95b40cf99cb.jpg"/>
                                }>
                                    <Meta title="Makanan yang Dilarang untuk Kucing"/>
                                </Card>
                            </a>
                        </Col>
                    </Row>                    
                </div>
            </Grid>
        )
    }
}

export default Makanan;


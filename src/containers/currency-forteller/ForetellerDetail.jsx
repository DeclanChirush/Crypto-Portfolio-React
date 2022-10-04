import React, {useEffect, useState} from 'react';
import {Col, Image, Row, Table} from "react-bootstrap";
import CurrencyService from "../../services/CurrencyService";
import ScoreMeter from "./ScoreMeter";


const ForetellerDetail = ({title, coinImage, code}) => {
    const [priceData, setPriceData] = useState([]);
    const [volumeData, setVolumeData] = useState([]);
    const [marketCapData, setMarketCapData] = useState([]);


    useEffect(() => {
        async function dataFetch() {
            await CurrencyService.getPredictionByCurrencyAction(code, 'price')
                .then(response => response.data)
                .then(response => response.data)
                .then(response => {
                    setPriceData(response)
                })
                .catch(error => {
                    console.log(error.message)
                });

            await CurrencyService.getPredictionByCurrencyAction(code, 'volume')
                .then(response => response.data)
                .then(response => response.data)
                .then(response => {
                    setVolumeData(response)
                })
                .catch(error => {
                    console.log(error.message)
                });

            await CurrencyService.getPredictionByCurrencyAction(code, 'market_cap')
                .then(response => response.data)
                .then(response => response.data)
                .then(response => {
                    setMarketCapData(response)
                })
                .catch(error => {
                    console.log(error.message)
                });
        }

        dataFetch();
    }, []);

    return (
        <div className="dg__software__area section-padding--tb bg--white">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="dg__software__inner">
                            <h1 className='text-center'>{title}</h1>

                            <div className='py-4'>
                                <Image src={coinImage}
                                       className='mx-auto d-block'
                                       alt={title}
                                       width={120}
                                       height={120}/>
                            </div>

                            <div className='pt-3 text-left'>
                                <Row>
                                    <Col>
                                        <div></div>
                                    </Col>
                                    <Col className='text-right'>
                                        <div>
                                            <h4>Today</h4>
                                        </div>
                                    </Col>
                                    <Col className='text-right'>
                                        <div>
                                            <h4>Tomorrow</h4>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{backgroundColor:'#e8eaf6'}}>
                                        <div>
                                            <h4>USD Price</h4>
                                        </div>
                                    </Col>
                                    <Col style={{backgroundColor:'#e8eaf6'}} className='text-right font-weight-bold'>
                                        <div>
                                            <p>$ {priceData.today}</p>
                                        </div>
                                    </Col>
                                    <Col style={{backgroundColor:'#e8eaf6'}} className='text-right font-weight-bold'>
                                        <div>
                                            <p>$ {priceData.tomorrow}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{backgroundColor:'#e3f2fd'}}>
                                        <div>
                                            <h4>24H Volume</h4>
                                        </div>
                                    </Col>
                                    <Col style={{backgroundColor:'#e3f2fd'}} className='text-right font-weight-bold'>
                                        <div>
                                            <p>$ {volumeData.today}</p>
                                        </div>
                                    </Col>
                                    <Col style={{backgroundColor:'#e3f2fd'}} className='text-right font-weight-bold'>
                                        <div>
                                            <p>$ {volumeData.tomorrow}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{backgroundColor:'#e1f5fe'}}>
                                        <div>
                                            <h4>Market Cap</h4>
                                        </div>
                                    </Col>
                                    <Col style={{backgroundColor:'#e1f5fe'}} className='text-right font-weight-bold'>
                                        <div>
                                            <p>$ {marketCapData.today}</p>
                                        </div>
                                    </Col>
                                    <Col style={{backgroundColor:'#e1f5fe'}} className='text-right font-weight-bold'>
                                        <div>
                                            <p>$ {marketCapData.tomorrow}</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </div>
                    </div>

                    <div>
                        <ScoreMeter
                            priceScore={priceData.score}
                            volumeScore={volumeData.score}
                            marketCapScore={marketCapData.score}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForetellerDetail;

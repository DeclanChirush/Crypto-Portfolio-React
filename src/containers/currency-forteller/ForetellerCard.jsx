import React, {useEffect, useState} from 'react';
import {Card, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import CurrencyDetailsService from "../../services/CurrencyDetailsService";

import SectionTitleTwo from "../../components/ui/section-titles/SectionTitleTwo";

const ForetellerCard = () => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        async function dataFetch() {
            await CurrencyDetailsService.getAllCurrency()
                .then(response => response.data)
                .then((data) => {
                    setCardData(data);
                }).catch(error => console.log(error.message));
        }

        dataFetch();
    }, []);

    const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    return (<div className="market__table bg--white pt--140 pb--120">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <SectionTitleTwo title="CURRENCY FORETELLER"/>
                    <p className='text-center'>{text}</p>
                </div>
            </div>

            <div className='pt-5'>
                <Row className="g-4 align-items-center justify-content-center">
                    {
                        cardData.length === 0 ?
                            <div></div>
                            :
                            cardData.map((data, idx) => (
                                <Link
                                    to={{
                                        pathname: process.env.PUBLIC_URL + '/foreteller',
                                        state: {
                                            name: data.name, code: data.code, image: data.image
                                        }
                                    }}
                                    key={idx}>
                                    <Card className="mr-2 mt-2 p-2" style={{width: '20rem'}}>
                                        <Card.Img
                                            src={data.image}
                                            alt={data.image}/>
                                        <Card.Body>
                                            <div className='flex justify-content-center align-items-center'>
                                                <p className='text-center h2 text-uppercase'>{data.name}</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            ))
                    }
                </Row>
            </div>

        </div>
    </div>);
}

export default ForetellerCard;

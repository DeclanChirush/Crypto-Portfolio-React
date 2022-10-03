import React from 'react';
import {Card, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import SectionTitleTwo from "../../components/ui/section-titles/SectionTitleTwo";

const ForetellerCard = () => {
    // const [cardData, setCardData] = useState([]);
    //
    // useEffect(() => {
    //     async function dataFetch() {
    //         CurrencyService.getPrediction()
    //             .then(response => response.data)
    //             .then((data) => {
    //                 console.log(data);
    //                 console.log(dataCards);
    //             }).catch(error => console.log(error.message));
    //     }
    //
    //     dataFetch();
    // }, []);

    const dataCards = [
        {
            "name": "BitCoin",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png",
            "path": "/foreteller-bitcoin"
        },
        {
            "name": "Ethereum",
            "image": "https://yt3.ggpht.com/ytc/AMLnZu8fhtd4JmRi9ALE3-IppCAEuCNPZJG1eBcM9UYU2g=s900-c-k-c0x00ffffff-no-rj",
            "path": "/foreteller-ethereum"
        },
        {
            "name": "PolkaEx",
            "image": "https://icodrops.com/wp-content/uploads/2021/09/IMG_20210929_113644_788.jpg",
            "path": "/foreteller-polkaex"
        },
    ]

    const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    return (
        <div className="market__table bg--white pb--120">
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
                            dataCards.map((data,idx) => (
                                <Link to={process.env.PUBLIC_URL + data.path} key={idx}>
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
        </div>
    );
}

export default ForetellerCard;
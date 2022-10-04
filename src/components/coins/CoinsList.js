import Navbar from "../dashboard/sidebar/Navbar";
import {Button, Container, Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import CurrencyDetailsService from "../../services/CurrencyDetailsService";

function CoinsList(props) {
    const divBox = {
        height: '150px'
    }
    const divSmallBox = {
        height: '20px'
    }

    let count = 1;
    const [coinsList, setCardData] = useState([]);

    useEffect(() => {
        async function dataFetch() {
            await CurrencyDetailsService.getAllCurrency()
                .then(response => response.data)
                .then((data) => {
                    setCardData(data)
                }).catch(error => console.log(error.message));
        }

        dataFetch();
    }, []);

    const handleDelete = async (id) => {
        await CurrencyDetailsService.deleteCurrencyById(id)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            }).catch(error => {
                console.log(error.message);
            });
    }

    return (
        <div>
            {/*style={{*/}
            {/*backgroundImage: `url(${RegistrationBackground})`,*/}
            {/*backgroundSize: 'cover',*/}
            {/*overflow: 'hidden',}}*/}
            <Navbar/>
            <div style={divBox}/>
            <Container>
                <div>
                    <Link to={`/add-coin`} className={'btn btn-success'}>Add New Coin</Link>
                </div>
                <div style={divSmallBox}/>
                <Table striped bordered hover variant='dark'>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Description</th>
                        <th>Image Path</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        coinsList.length === 0 ?
                            <tr>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                            </tr>
                            :
                            coinsList.map((coin, key) => (
                                <tr key={coin._id.$oid}>
                                    <td>{count++}</td>
                                    <td>{coin.name}</td>
                                    <td>{coin.code}</td>
                                    <td>{coin.description}</td>
                                    <td>{coin.image}</td>
                                    <td>
                                        <Link to={{
                                            pathname: process.env.PUBLIC_URL + '/coin-edit',
                                            state: {
                                                coinId: coin._id.$oid,
                                                coinName: coin.name,
                                                coinCode: coin.code,
                                                coinDescription: coin.description,
                                                coinImagePath: coin.image
                                            }
                                        }}
                                              className={'btn btn-primary'}>Edit</Link>
                                    </td>
                                    <td>
                                        <Button className="btn-danger">Delete</Button>
                                    </td>
                                </tr>
                            ))
                    }
                    </tbody>
                </Table>
            </Container>
            <div style={divBox}/>
        </div>
    );
}

export default CoinsList;

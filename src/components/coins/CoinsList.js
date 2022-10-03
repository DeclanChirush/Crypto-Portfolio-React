import Navbar from "../dashboard/sidebar/Navbar";
import {Container, Table} from "react-bootstrap";
import React,{useState} from "react";
import {Link} from "react-router-dom";

function CoinsList(props) {
    const divBox = {
        height: '150px'
    }
    const divSmallBox = {
        height: '20px'
    }

    let count = 1;
    const [coinsList, setCoinsList] = useState([]);


    return (
        <div>
            {/*style={{*/}
            {/*backgroundImage: `url(${RegistrationBackground})`,*/}
            {/*backgroundSize: 'cover',*/}
            {/*overflow: 'hidden',}}*/}
            <Navbar/>
            <div style={divBox}/>
            <Container>
                <div >
                    <Link to={`/add-news`} className={'btn btn-success'}>Add New Coin</Link>
                </div>
                <div style={divSmallBox}/>
                <Table striped bordered hover variant='dark'>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Description</th>
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
                            </tr>
                            :
                            coinsList.map((coin) => (

                                <tr key={coin.id}>
                                    <td>{count++}</td>
                                    <td>{coin.name}</td>
                                    <td>{coin.code}</td>
                                    <td>{coin.imageLink}</td>
                                    <td>
                                        <Link to={`/coin-edit/` + coin.id}
                                              className={'btn btn-primary'}>Edit</Link>
                                    </td>
                                    <td>
                                        <Link to={`/coin-delete/` + coin.id}
                                              className={'btn btn-primary'}>Delete</Link>
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
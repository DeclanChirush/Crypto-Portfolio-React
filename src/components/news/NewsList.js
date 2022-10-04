import Navbar from "../dashboard/sidebar/Navbar";
import {Container, Table} from "react-bootstrap";
import React,{useState} from "react";
import {Link} from "react-router-dom";

function NewsList(props) {
    const divBox = {
        height: '150px'
    }
    const divSmallBox = {
        height: '20px'
    }

    let count = 1;
    const [newsList, setNewsList] = useState([]);


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
                    <Link to={`/add-news`} className={'btn btn-success'}>Add a News</Link>
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
                        newsList.length === 0 ?
                            <tr>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                            </tr>
                            :
                            newsList.map((news) => (

                                <tr key={news.id}>
                                    <td>{count++}</td>
                                    <td>{news.author}</td>
                                    <td>{news.title}</td>
                                    <td>{news.description}</td>
                                    <td>
                                        <Link to={`/news-edit/` + news.id}
                                              className={'btn btn-primary'}>Edit</Link>
                                    </td>
                                    <td>
                                        <Link to={`/news-delete/` + news.id}
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

export default NewsList;
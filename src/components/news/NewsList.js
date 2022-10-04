import Navbar from "../dashboard/sidebar/Navbar";
import {Button, Container, Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import NewsService from "../../services/NewsService";

function NewsList(props) {
    const divBox = {
        height: '150px'
    }
    const divSmallBox = {
        height: '20px'
    }

    let count = 1;
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        async function dataFetch() {
            await NewsService.getAllNews()
                .then(response => response.data)
                .then((data) => {
                    setNewsList(data)
                }).catch(error => console.log(error.message));
        }

        dataFetch();
    }, []);

    const handleDelete = async (id) => {
        await NewsService.deleteNewsById(id)
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
                        <th>Date</th>
                        <th>Image Link</th>
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
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                            </tr>
                            :
                            newsList.map((news, key) => (

                                <tr key={news._id.$oid}>
                                    <td>{count++}</td>
                                    <td>{news.author}</td>
                                    <td>{news.title}</td>
                                    <td>{news.description}</td>
                                    <td>{news.date.$date}</td>
                                    <td>{news.image}</td>
                                    <td><Link to={{
                                        pathname: process.env.PUBLIC_URL + '/edit-news',
                                        state: {
                                            newsId: news._id.$oid,
                                            newsTitle: news.title,
                                            newsImage: news.image,
                                            newsDescription: news.description,
                                            newsAuthor: news.author
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

export default NewsList;

import React, {useState} from 'react';
import "../../assets/scss/news.css"
import Navbar from "../dashboard/sidebar/Navbar";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

// TODO: Validating registration form fields
const requiredField = data => {
    if (!data) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

function EditCoin(props) {

    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);


    const handleAddNews = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        // NewsDataService.create({ title, description })
        //   .then((response) => {
        //     setMessage(response.data.message);
        //     setLoading(false);
        //   })
        //   .catch((e) => {
        //     console.log(e);
        //   });
    };

    return (
        <div >
            {/*style={{ backgroundImage: `url(${LoginImage})`, backgroundSize: 'cover', overflow: 'hidden', }}*/}
            <Navbar/>
            <div className="auth-wrapper-login">
                <div className="auth-inner-login">

                    <Form onSubmit={handleAddNews}>
                        {/*      ref={check => {*/}
                        {/*    form = check;*/}
                        {/*}}>*/}
                        <h3>Edit Coin</h3>

                        {!successful && (
                            <div>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <Input
                                        type="text"
                                        placeholder="Enter Coin Name"
                                        className="form-control"
                                        name="name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        validations={[requiredField]}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="code">Code</label>
                                    <Input
                                        type="text"
                                        placeholder="Enter Coin Code"
                                        className="form-control"
                                        name="code"
                                        value={code}
                                        onChange={e => setCode(e.target.value)}
                                        validations={[requiredField]}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="imageLink">Image Link</label>
                                    <Input
                                        type="text"
                                        placeholder="Enter Coin Image Link"
                                        className="form-control"
                                        name="imageLink"
                                        value={imageLink}
                                        onChange={e => setImageLink(e.target.value)}
                                        validations={[requiredField]}
                                        required
                                    />
                                </div>

                                <br></br>

                                <div className="form-group d-grid gap-2">
                                    <button className="btn btn-primary btn-block" disabled={loading}>
                                        {loading && (
                                            <span className="spinner-border spinner-border-sm"> </span>
                                        )}
                                        <span>Edit</span>
                                    </button>
                                </div>
                            </div>
                        )}

                        <br></br>

                        {message && (
                            <div className="form-group">
                                <div
                                    className={successful ? "alert alert-success text-center" : "alert alert-danger text-center"}
                                    role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default EditCoin;
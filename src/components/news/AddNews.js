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

function AddNews(props) {

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
              <h3>Add a news</h3>

              {!successful && (
                  <div>
                    <div className="form-group">
                      <label htmlFor="author">Author Name</label>
                      <Input
                          type="text"
                          placeholder="Enter author Name"
                          className="form-control"
                          name="author"
                          value={author}
                          onChange={e => setAuthor(e.target.value)}
                          validations={[requiredField]}
                          required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <Input
                          type="text"
                          placeholder="Enter Title"
                          className="form-control"
                          name="title"
                          value={title}
                          onChange={e => setTitle(e.target.value)}
                          validations={[requiredField]}
                          required
                      />
                    </div>

                      <div className="form-group">
                          <label htmlFor="description">Description</label>
                          <textarea
                              type="text"
                              placeholder="Enter Description"
                              className="form-control"
                              name="description"
                              value={description}
                              onChange={e => setDescription(e.target.value)}
                              style={{height: "100px"}}
                              required
                          />
                      </div>

                    <br></br>

                    <div className="form-group d-grid gap-2">
                      <button className="btn btn-success btn-block" disabled={loading}>
                        {loading && (
                            <span className="spinner-border spinner-border-sm"> </span>
                        )}
                        <span>Submit</span>
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
export default AddNews;
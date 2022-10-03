import React from "react";
import { Link } from "react-router-dom";
const Introduction = () => {
  return (
    <div className="dg__secure__transaction">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="dg__secure__inner">
              <h2>
                Introduction
              </h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit,
              </p>
              <Link
                className="secure__btn dg__btn btn--trans"
                to={process.env.PUBLIC_URL + "/about-bitcoin"}
              >
                GET STARTED
              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="dg__secure__thumb">
              <img
                src={process.env.PUBLIC_URL + "/images/about/introduction-image.png"}
                alt="secure images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

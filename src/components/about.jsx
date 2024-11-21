import React from "react";
import './about.css'
export const About = (props) => {
  return (
    <div id="about">
      {/* <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="executive-summary-container">
      <div className="executive-summary-content">
        <h3 className="executive-summary-heading text-center">
          Executive <strong>Summary</strong>
        </h3>
        <p style={{ textAlign: 'justify', color: '#000000' }}>
          <strong>
            Day To Day have established themselves as one of the well-known brands throughout the United Arab Emirates.
          </strong>
        </p>
        <p style={{ textAlign: 'justify', color: '#000000' }}>
          <strong>
            Day To Day have established themselves as one of the well-known brands throughout the United Arab Emirates.
          </strong>
        </p>
        <h3 className="product-services-heading text-center">
          Product and <strong>Services</strong>
        </h3>
        <p style={{ textAlign: 'justify', color: '#000000' }}>
          <strong>
            Day To Day have established themselves as one of the well-known brands throughout the United Arab Emirates.
            Day To Day have established themselves as one of the well-known brands throughout the United Arab Emirates.
            Day To Day have established themselves as one of the well-known brands throughout the United Arab Emirates.
          </strong>
        </p>
      </div>
    </div>
    </div>
  );
};

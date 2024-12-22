import React, { useEffect, useState } from "react";
import Events from "./Events";
import axios from "axios";
import moment from "moment";


export const Services = (props) => {
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [eventss, setEvents] = useState([]);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await axios.get(
          // `${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/events/get`
          "https://marakahumanitarian.shop/v1/b2c/events/get"
        );
        setEvents(response.data);
      } catch (err) {
        console.log("error fetching events");
      }
    };

    fetchVideoUrl();
  }, []);
  console.log("eventss", eventss);

  const today = moment();

  const upcomingEvents = Array.isArray(eventss)
    ? eventss.filter((eve) => eve.date && moment(eve.date).isAfter(today))
    : [];

  const pastEvents = Array.isArray(eventss)
    ? eventss.filter((even) => even.date && moment(even.date).isBefore(today))
    : [];
  const handleToggleText = (eventId) => {
    setExpandedCardId(expandedCardId === eventId ? null : eventId);
  };
  return (
    <div id="services" className="text-center">
      <div>
        <div className="section-title">
          <h2>Events</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="">
          <h3>Upcomming Events</h3>
          {upcomingEvents.length > 0 ? (
            upcomingEvents?.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className=" col-md-4 col-sm-6  "
                style={{ paddingLeft: "50px" }}
              >
                <div
                  className="card bg-primary "
                  style={{
                    width: "100%",
                    maxWidth: "350px",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    // src={d.image}
                    src={"https://marakahumanitarian.shop" + d.images[0]}
                    className="card-img-top"
                    alt={d.name}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      width: "100%",
                    }} // Ensures the image fits within the card
                  />
                  <div
                    className="card-body text-center"
                    style={{
                      height: expandedCardId === d.id ? "auto" : "150px",
                      marginBottom: "10px",
                    }}
                  >
                    <h5 className="card-title">{d.eventName}</h5>
                    <p
                      className="card-text"
                      style={{
                        height: expandedCardId === d.id ? "auto" : "150px",
                      }}
                    >
                      {expandedCardId === d.id
                        ? d.description
                        : `${d.description.substring(0, 100)}...`}
                      <span
                        onClick={() => handleToggleText(d.id)}
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                      >
                        {expandedCardId === d.id ? " Show Less" : " Read More"}
                      </span>
                    </p>
                  </div>
                  <a className="btn btn-primary">button</a>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: "red" }}>There are no Upcomming Events</p>
          )}
        </div>
        <div className="row">
          <h3>Past Events</h3>
          {pastEvents.length > 0 ? (
            pastEvents?.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className=" col-md-4 col-sm-6  "
                style={{ paddingLeft: "50px" }}
              >
                <div
                  className="card bg-primary "
                  style={{
                    width: "100%",
                    maxWidth: "350px",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src={"https://marakahumanitarian.shop" + d.images[0]}
                    className="card-img-top"
                    alt={d.name}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      width: "100%",
                    }} // Ensures the image fits within the card
                  />
                  <div
                    className="card-body text-center"
                    style={{
                      height: expandedCardId === d.id ? "auto" : "200px",
                      marginBottom: "10px",
                    }}
                  >
                    <h5 className="card-title">{d.eventName}</h5>
                    <p
                      className="card-text"
                      style={{
                        height: expandedCardId === d.id ? "auto" : "150px",
                      }}
                    >
                      {expandedCardId === d.id
                        ? d.description
                        : `${d.description.substring(0, 200)}...`}
                      <span
                        onClick={() => handleToggleText(d.id)}
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                      >
                        {expandedCardId === d.id ? " Show Less" : " Read More"}
                      </span>
                    </p>
                  </div>
                  <a className="btn btn-primary">button</a>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: "red" }}>There are no Past Events</p>
          )}
        </div>
      </div>
    </div>
  );
};

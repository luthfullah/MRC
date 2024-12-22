import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

const Events = () => {
  const [eventss, setEvents] = useState([]);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [expired, setExpired] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  // const [showFullText, setShowFullText] = useState(false);

  // const toggleText = () => setShowFullText(!showFullText);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: ""
  });
  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/events/get`
        );
        setEvents(response.data);
      } catch (err) {
        setError("Error fetching video: " + err.message);
      }
    };

    fetchVideoUrl();
  }, []);
  const today = moment();

  // const upcomingEvents = eventss?.filter((eve) =>
  //   moment(eve.date).isAfter(today)
  // );
  // const pastEvents = eventss?.filter((even) =>
  //   moment(even.date).isBefore(today)
  // );
  const upcomingEvents = Array.isArray(eventss)
  ? eventss.filter((eve) => eve.date && moment(eve.date).isAfter(today))
  : [];

const pastEvents = Array.isArray(eventss)
  ? eventss.filter((even) => even.date && moment(even.date).isBefore(today))
  : [];

  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleToggleText = (eventId) => {
    setExpandedCardId(expandedCardId === eventId ? null : eventId);
  };
  const renderEventCard = (event, isUpcoming) => (
    <div
      className="col-lg-1 col-md-4 col-sm-12 row mb-4  "
      key={event.id}
    >
      <div
        className={`card shadow-sm ${
          isUpcoming ? "border-primary" : "border-secondary"
        }`}
      >
        <img
          src={process.env.REACT_APP_PUBLIC_URL + event.images[0]}
          alt={event.eventName}
          className="card-img-top mt-1"
          height={200}
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="card-body">
          <h5 className=" sec-color fs-3 fw-bold">{event.eventName}</h5>
          {/* <p className="card-text">{event.description}</p> */}
          <p className="fontPara text-justify paragraph">
            {expandedCardId === event.id
              ? event.description
              : `${event.description.substring(0, 100)}...`}
            <span
              onClick={() => handleToggleText(event.id)}
              className="text-primary"
              style={{ cursor: 'pointer' }}
            >
              {expandedCardId === event.id ? ' Show Less' : ' Read More'}
            </span>
          </p>
          <p
            className={`card-text ${
              isUpcoming ? "text-primary" : "text-secondary"
            }`}
          >
            {moment(event.date).format("MMMM Do, YYYY")}
          </p>
          <button
            onClick={() => handleRegisterClick(event)}
            className={`btn bg_color btn-${isUpcoming ? "primary" : "secondary"}`}
          >
            {isUpcoming ? "Register Now" : "View Details"}
          </button>
        </div>
      </div>
    </div>
  );


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleRegisterClick = (event) => {
    if (moment(event.date).isBefore(today)) {
      setSelectedEvent(event);
      setShowForm(false); // Hide the registration form
      setExpired(true)
    } else {
      setSelectedEvent(event);
      setShowForm(true); // Show the registration form for upcoming events
      setExpired(false)
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/register`, {
        eventName: selectedEvent.eventName,
        ...formData,
      });
      alert("Registration successful!");
      setShowForm(false);
      setFormData({ name: "", email: "", contact: "", message: "" });
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div id="events" style={{minHeight: '100vh',backgroundColor: '#463640'}}>
    <div className="container py-2" >
      <h2 className="text-center justify-content-center mb-4 py-3 text-white fs-1 fw-bolder">EVENTS</h2>

      <div className="row justify-content-center">
        <div className="col-12">
          <h3 className="text-primary mb-3 fs-2 text-white">Upcoming Events</h3>
          <div className="row justify-content-center">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => renderEventCard(event, true))
            ) : (
              <p className="text-danger">No upcoming events</p>
            )}
          </div>
        </div>
      </div>

      <hr className="text-white"/>

      <div className="row justify-content-center">
        <div className="col-12">
          <h3 className="text-secondary mb-3 text-white fs-2">Past Events</h3>
          <div className="row justify-content-center">
            {pastEvents.length > 0 ? (
              pastEvents.map((event) => renderEventCard(event, false))
            ) : (
              <p className="text-danger">No past events</p>
            )}
          </div>
        </div>
      </div>

      {showForm && (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Register for {selectedEvent.eventName}</h5>
                <button type="button" className="btn-close" onClick={() => setShowForm(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contact Number</label>
                    <input
                      type="text"
                      name="contact"
                      className="form-control"
                      value={formData.contact}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn bg_color w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
     {expired && (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>This event has already expired!</strong>
          <button type="button" className="btn-close" onClick={() => setExpired(false)}></button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Events;

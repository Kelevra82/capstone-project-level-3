import React from "react";
import { Navbar } from "./Navbar";
import { handleSubmit } from "../controllers/handleSubmit";
import { handleScheduleCall } from "../controllers/handleScheduleCall";
import { Banner } from "./Banner";

export function Contact() {
  return (
    <>
      <header>
        <Banner />
        <Navbar />
      </header>
      <br />
      <main>
        <h1 className="coninfo">
          <span>Moe's City Bounce Rentals</span>
        </h1>
        <br />
        <div className="container m-3 text-center">
          <span className="alert d-inline-block alert-black bg-dark border border-3 border-info rounded-pill text-primary fs-5 alert-dismissible">
            <span className="spinner-grow text-success"></span>
            Check out our featured products.
            <span
              className="badge bg-danger text-dark fs-6 rounded-pill"
              id="animate-badge"
            >
              20% OFF
            </span>
            <button className="btn-close" data-bs-dismiss="alert"></button>
          </span>
        </div>
        <br />
        <h2 className="text-center">Contact Us!</h2>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div>
                <form onSubmit={handleSubmit} className="d-inline-block">
                  <ul className="list-group m-5 p-5 fs-5">
                    <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                      <label htmlFor="name">Name:</label>
                      <br />
                    </li>
                    <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                      <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                      />
                      <br />
                    </li>
                    <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                      <label htmlFor="email">Email:</label>
                      <br />
                    </li>
                    <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                      <input
                        required
                        type="email"
                        id="email"
                        placeholder="example@email.com"
                      />
                      <br />
                    </li>
                    <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                      <label htmlFor="comments">Comments:</label>
                      <br />
                    </li>
                    <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                      <textarea id="comments"></textarea>
                      <br />
                    </li>
                    <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        id="button-shadow"
                      >
                        Submit
                      </button>
                    </li>
                    <output
                      id="emailFormProcessingTag"
                      className="list-group-item text-primary bg-dark border-dark"
                    ></output>
                    <output
                      id="emailFormProcessedTag"
                      className="list-group-item text-primary bg-dark border-dark"
                    ></output>
                  </ul>
                </form>
              </div>

              <form onSubmit={handleScheduleCall}>
                <ul className="list-group m-5 p-5 fs-5">
                  <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                    <label htmlFor="name">Name:</label>
                    <br />
                  </li>
                  <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="text-center"
                    />
                    <br />
                  </li>
                  <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                    <label htmlFor="phone">Phone #:</label>
                    <br />
                  </li>
                  <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="###-###-####"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      className="text-center"
                    />
                    <br />
                  </li>
                  <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                    <label htmlFor="date">Date:</label>
                    <br />
                  </li>
                  <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                    <input
                      required
                      type="date"
                      id="date"
                      name="date"
                      className="text-center"
                    />
                    <br />
                  </li>
                  <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                    <label htmlFor="time">Time:</label>
                    <br />
                  </li>
                  <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                    <input
                      required
                      type="time"
                      id="time"
                      name="time"
                      className="text-center"
                    />
                    <br />
                  </li>
                  <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                    <button type="submit" className="btn btn-sm btn-primary">
                      Schedule Reservation
                    </button>
                  </li>
                  <output
                    id="scheduleFormTag"
                    className="list-group-item text-primary bg-dark border-dark"
                  ></output>
                </ul>
              </form>
            </div>
            <div className="col container">
              <ul className="list-group m-5 p-5 fs-5">
                <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                  Don Lee
                </li>
                <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                  555-555-5555
                </li>
                <li className="container list-group-item text-primary bg-dark border-dashed border-dark">
                  9qHg8@example.com
                </li>
              </ul>
              <h3>Reserve Now</h3>
              <img
                className="card-img"
                src="../assets/images/select-state.png"
                useMap="#image-map"
                alt="Choose Your State"
              />
              <map name="image-map">
                <area
                  title="Alabama"
                  coords="147,1, 220,2, 242,103, 241,150, 160,150, 166,170, 152,178, 135,171, 133,117"
                  shape="poly"
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Alabama"
                />
                <area
                  title="Mississippi"
                  coords="142,1, 144,5, 131,115, 133,173, 96,178, 84,147, 29,146, 50,92, 48,46, 80,1"
                  shape="poly"
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Mississippi"
                />
              </map>
            </div>
          </div>
        </div>
        {/* <script>
                            imageMapResize();
                          </script> */}
      </main>
      <br />
      <footer className="botsig fs-5">
        <form>
          <p>Rate us!</p>
          <input id="1star" type="radio" name="stars" />
          <label htmlFor="1star" className="ps-2 pe-2">
            1 star
          </label>
          <input id="2stars" type="radio" name="stars" />
          <label htmlFor="2stars" className="ps-2 pe-2">
            2 stars
          </label>
          <input id="3stars" type="radio" name="stars" />
          <label htmlFor="3stars" className="ps-2 pe-2">
            3 stars
          </label>
        </form>
        <br />
        <hr />
        <p>
          <i>Website by me</i>
        </p>
      </footer>
    </>
  );
}

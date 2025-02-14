import React from "react";
import { Navbar } from "./Navbar";

export function Contact() {
  return (
  <>
      <header>
        <img
          width="100%"
          alt="Bounce House"
          src="./assets/images/header-nav.jpg"
        />
        <Navbar />
      </header><br>
        <main>
          <h1 class="coninfo"><span>Moe's City Bounce Rentals</span></h1>
          <br>
            <div class="container m-3 text-center">
              <span class="alert d-inline-block alert-black bg-dark border border-3 border-info rounded-pill text-primary fs-5 alert-dismissible">
                <span class="spinner-grow text-success"></span>
                Check out our featured products.
                <span class="badge bg-danger text-dark fs-6 rounded-pill" id="animate-badge">20% OFF</span>
                <button class="btn-close" data-bs-dismiss="alert"></button>
              </span>
            </div><br>
              <h2 class="text-center">Contact Us!</h2>
              <div class="container text-center">
                <div class="row">
                  <div class="col">
                    <div>
                      <form onsubmit="handleSubmit(event)" class="d-inline-block">
                        <ul class="list-group m-5 p-5 fs-5">
                          <li class="container list-group-item text-primary bg-dark border-dashed border-dark">
                            <label for="name">Name:</label><br>
                          </li>
                          <li class="container list-group-item text-primary bg-dark border-dashed border-dark">
                            <input
                              required
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Enter your name"
                            /><br>
                          </li>
                          <li class="container list-group-item text-primary bg-dark border-dashed border-dark">
                            <label for="email">Email:</label><br>
                          </li>
                          <li class="container list-group-item text-primary bg-dark border-dashed border-dark">
                            <input
                              required
                              type="email"
                              id="email"
                              placeholder="example@email.com"
                            /><br>
                          </li>
                          <li class="container list-group-item text-primary bg-dark border-dashed border-dark">
                            <label for="comments">Comments:</label><br>
                          </li>
                          <li class="container list-group-item text-primary bg-dark border-dashed border-dark">
                            <textarea id="comments"></textarea><br>
                          </li>
                          <li class="container list-group-item text-primary bg-dark border-dashed border-dark">
                            <button type="submit" class="btn btn-sm btn-primary" id="button-shadow">Submit</button>
                          </li>
                          <output id="emailFormProcessingTag" class="list-group-item text-primary bg-dark border-dark"></output>
                          <output id="emailFormProcessedTag" class="list-group-item text-primary bg-dark border-dark"></output>
                        </ul>
                      </form>
                    </div>

                    <form onsubmit="handleScheduleCall(event)">
                      <ul class="list-group m-5 p-5 fs-5">
                        <li class="container list-group-item text-primary bg-dark border-dashed border-dark">
                          <label for="name">Name:</label><br>
                        </li>
                        <li class="container list-group-item text-primary bg-dark border-dashed border-dark">
                          <input required type="text" id="name" name="name" placeholder="Enter your name" class="text-center"><br>
                          </li>
                            <li class="container list-group-item text-primary bg-dark border-dashed border-dark">
                              <label for="phone">Phone #:</label><br>
                            </li>
                            <li class="container list-group-item text-primary bg-dark border-dashed border-dark">
                              <input required type="tel" id="phone" name="phone" placeholder="###-###-####" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class="text-center"><br>
                              </li>
                                <li class="container list-group-item text-primary bg-dark border-dashed border-dark">
                                  <label for="date">Date:</label><br>
                                </li>
                                <li class="container list-group-item text-primary bg-dark border-dashed border-dark">
                                  <input required type="date" id="date" name="date" class="text-center"></input><br>
                                </li>
                                <li class="container list-group-item text-primary bg-dark border-dashed border-dark">
                                  <label for="time">Time:</label><br>
                                </li>
                                <li class="container list-group-item text-primary bg-dark border-dashed border-dark">
                                  <input required type="time" id="time" name="time" class="text-center"></input><br>
                                </li>
                                <li class="container list-group-item text-primary bg-dark border-dashed border-dark">
                                  <button type="submit" class="btn btn-sm btn-primary">Schedule Reservation</button>
                                </li>
                                <output id="scheduleFormTag" class="list-group-item text-primary bg-dark border-dark"></output>
                              </ul>
                            </form>
                          </div>
                          <div class="col container">
                            <ul class="list-group m-5 p-5 fs-5">
                              <li class="container list-group-item text-primary bg-dark border-dashed border-dark">Don Lee</li>
                              <li class="container list-group-item text-primary bg-dark border-dashed border-dark">555-555-5555</li>
                              <li class="container list-group-item text-primary bg-dark border-dashed border-dark">9qHg8@example.com</li>
                            </ul>
                            <h3>Reserve Now</h3>
                            <img class="card-img" src="images\select-state.png" usemap="#image-map" alt="Choose Your State">
                              <map name="image-map">
                                <area title="Alabama" coords="147,1, 220,2, 242,103, 241,150, 160,150, 166,170, 152,178, 135,171, 133,117" shape="poly" target="_blank" href="https://en.wikipedia.org/wiki/Alabama">
                                  <area title="Mississippi" coords="142,1, 144,5, 131,115, 133,173, 96,178, 84,147, 29,146, 50,92, 48,46, 80,1" shape="poly" target="_blank" href="https://en.wikipedia.org/wiki/Mississippi">
                                  </map>
                                </div>
                              </div>
                          </div>
                          <script>
                            imageMapResize();
                          </script>
                        </main><br>
                          <footer class="botsig fs-5">
                            <form>
                              <p>Rate us!</p>
                              <input id="1star" type="radio" name="stars">
                                <label for="1star" class="ps-2 pe-2">1 star</label>
                                <input id="2stars" type="radio" name="stars">
                                  <label for="2stars" class="ps-2 pe-2">2 stars</label>
                                  <input id="3stars" type="radio" name="stars">
                                    <label for="3stars" class="ps-2 pe-2">3 stars</label>
                                  </form>
                                  <br>
                                    <hr>
                                      <p><i>Website by me</i></p>
                                    </footer>
    </>
  );
}


import React from "react";
import { Navbar } from "./Navbar";
import { Cards } from "./Cards";

export function About() {
  return (
    <>
      <header>
        <img
          width="100%"
          alt="Bounce House"
          src="../assets/images/header-nav.jpg"
        />
        <Navbar />
      </header>
      <br />

      <main id="mainTag">
        <h1 class="coninfo">Moe's City Bounce Rentals</h1>
        <br />
        <h2 class="text-center fs-2">About Us</h2>
        <p class="text-center fst-italic fs-5">
          Moe's City Bounce Rentals is a family-owned business. We have been
          <br />
          in business since 2010. We rent bounce houses for all of your needs.
        </p>
        <br />
        <Cards />
      </main>
      <br />
      <hr />
      <footer class="botsig fs-5">
        <p style="color: black">
          <i>Website by me</i>
        </p>
      </footer>
    </>
  );
}

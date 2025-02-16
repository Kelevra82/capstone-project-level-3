import React from "react";
import { Navbar } from "./Navbar";
import { Banner } from "./Banner";

export function About() {
  return (
    <>
      <header>
        <Banner />
        <Navbar />
      </header>
      <br />

      <main id="mainTag">
        <h1 className="coninfo">Moe's City Bounce Rentals</h1>
        <br />
        <h2 className="text-center fs-2">About Us</h2>
        <p className="text-center fst-italic fs-5">
          Moe's City Bounce Rentals is a family-owned business. We have been
          <br />
          in business since 2010. We rent bounce houses for all of your needs.
        </p>
        <br />
        {/* <script>
    const card1 = {};
    card1.src = "../assets/images/katapeed.jpg";
    card1.title = "Katapeed";
    card1.description =
      "Katapeed is a classic, fun for everyone, not safe for anyone obstacle course.";

    const card2 = {};
    card2.src = "../assets/images/peek-a-poo.jpg";
    card2.title = "Peek-a-poo";
    card2.description =
      "Another classic which comes with a net to trap the mosquitos inside, nowhere to hide.";

    const card3 = {};
    card3.src = "../assets/images/bounce-around.jpg";
    card3.title = "Bounce Around";
    card3.description =
      "Bounce around in a circle or see who can make it to the middle first, you decide. If this doesn't bore you, you can always go back to the beginning.";

    const card4 = {};
    card4.src = "../assets/images/bump-n-jump.jpg";
    card4.title = "Bump N Jump";
    card4.description =
      "Bump and jump around in a circle or see who...NOPE. You can always go back to the beginning.";

    const card5 = {};
    card5.src = "../assets/images/unknown.jpg";
    card5.title = "N/A";
    card5.description = "N/A. You can always go back to the beginning.";

    const card6 = {};
    card6.src = "../assets/images/gargantuan.jpg";
    card6.title = "Gargantuan...";
    card6.description =
      "Slide up or down. You can always go back to the beginning.";

    debugger;
    const cards = [card1, card2, card3, card4, card5, card6];
    for (position = 0; position < cards.length; position++) {
      const card = cards[position];
      const cardString = convertCard(card);
      mainTag.innerHTML += cardString;
    }
  </script> */}
      </main>
      <br />
      <hr />
      <footer className="botsig fs-5">
        <p style={{ color: "black" }}>
          <i>Website by me</i>
        </p>
      </footer>
    </>
  );
}

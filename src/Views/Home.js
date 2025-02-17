import React from "react";
import { Navbar } from "./Navbar";
import { Banner } from "./Banner";

export function Home() {
  return (
    <>
      <header>
        <Banner />
        <Navbar />
      </header>
      <br />

      <main>
        <article>
          <h1 className="coninfo">Moe's City Bounce Rentals</h1>
          <br />
          <h2 id="funjumps">Fun Jumps</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Varius
            fermentum varius eros nibh sed, risus lobortis pulvinar. Malesuada
            rhoncus dapibus nec potenti dapibus. Luctus fringilla ligula
            venenatis risus mi, turpis sodales. Pretium hendrerit nisi montes
            nisl diam. Libero torquent urna ultrices eleifend litora velit
            faucibus. Nullam blandit montes eget tellus congue metus
            scelerisque. Sodales purus nullam odio montes leo. Lectus maximus
            vulputate nascetur scelerisque aliquet. Sociosqu integer viverra
            tellus convallis felis tristique maximus. Quis eleifend netus ad ad;
            integer natoque eu. Amet vulputate rhoncus quis curae iaculis
            pretium; curae habitasse molestie. Semper ultricies a luctus conubia
            dictumst est faucibus. Nullam mauris ultricies sed faucibus auctor
            donec ornare ipsum. Dui class integer sodales a gravida mus purus
            lobortis. Faucibus torquent et elementum aliquet pellentesque.
            Lectus efficitur quam mollis mi ut tellus mauris? Consequat taciti
            duis est cras mi orci ex nostra. Habitant est bibendum pretium id;
            erat vivamus id. Egestas class eget phasellus eros parturient
            volutpat.
          </p>
          <br />

          <h2 id="waterslides">Water Slides</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies ex ut
            facilisis adipiscing montes rhoncus fusce torquent phasellus.
            Efficitur orci risus vivamus nibh luctus, natoque libero. Nascetur
            duis mauris ornare; lorem porttitor quisque. Quam ultricies conubia
            gravida sociosqu nascetur ut tristique. Ainceptos tincidunt libero
            nibh neque. Lectus pulvinar praesent himenaeos, platea iaculis
            bibendum. Quam phasellus netus placerat commodo donec; tellus amet.
            Ultricies inceptos torquent semper sem ac. Suscipit mus commodo
            scelerisque tempus sed fames. Suscipit nec quis nibh dignissim sem.
            Habitasse risus sapien eleifend mi praesent euismod. Tempus dolor
            turpis lobortis; pharetra odio conubia. Erat magna turpis accumsan
            commodo pulvinar senectus donec.
          </p>
          <br />

          <h2 id="portable">Portable</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Donec class
            blandit accumsan finibus orci felis, cursus justo ipsum. Enim litora
            urna felis non ultricies. Acubilia taciti ornare eros rhoncus
            dictum. Morbi luctus cubilia per auctor iaculis porttitor. Ornare
            montes elementum tortor ultrices laoreet taciti. Eu dictum dis morbi
            malesuada est adipiscing tincidunt aptent. Dis justo praesent dolor
            mus viverra dictum. Mollis vulputate volutpat dis tortor enim
            laoreet primis. Pulvinar diam tellus rhoncus facilisi donec nascetur
            suscipit. Cubilia porttitor in nisi praesent aliquet interdum
            venenatis nisl. Aenean blandit eros ad quisque mus scelerisque
            torquent ac. Vulputate donec imperdiet proin, semper erat nibh
            eleifend? Nostra nullam efficitur justo himenaeos platea montes
            orci. Rutrum vulputate duis vivamus; torquent platea nullam ac duis.
            Aliquam blandit conubia maecenas habitant auctor pulvinar sit.
            Facilisi mus massa quisque enim vulputate. Ultrices proin
            pellentesque neque cras molestie felis vehicula sit praesent.
            Feugiat vehicula laoreet morbi proin ac placerat? Volutpat sociosqu
            ullamcorper sit mattis condimentum accumsan tristique. Nibh auctor
            at libero ex ac elit vestibulum. Tellus aliquam mi blandit taciti
            torquent tristique tincidunt eu. Consequat blandit mi cubilia nec
            magnis ultricies. Fames hendrerit risus iaculis pellentesque non
            faucibus.d
          </p>
        </article>
      </main>
      <br />
      <hr />
      <br />

      <footer>
        <p>
          <b>
            <u>Sitemap:</u>
          </b>
        </p>

        <nav className="opacity75">
          <b>
            <a href="#funjumps">Fun Jumps</a>
          </b>
          <br />
          <b>
            <a href="#waterslides">Water Slides</a>
          </b>
          <br />
          <b>
            <a href="#portable">Portable</a>
          </b>
          <br />
        </nav>
        <br />
        <br />
        <hr />

        <p className="botsig fs-5">
          <i>Website by me</i>
        </p>
      </footer>
    </>
  );
}

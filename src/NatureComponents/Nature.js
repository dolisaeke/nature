import "./Nature.css";
import ContentCreation from "../assets/Content-creation.PNG";
import FlowerHand from "../assets/Flower-hand.PNG";
import GraphicDesign from "../assets/Graphic-design.PNG";
import NairaSign from "../assets/Naira-sign.PNG";
import WebDesign from "../assets/Web-design.PNG";
import InvertedCommaAd from "../assets/Inverted-comma-ad.png";
import JanePix from "../assets/Jane-pix.PNG";
import NairaSignb from "../assets/Naira-sign-b.PNG";

function Nature() {
  return (
    <div className="main-body">
      <section className="header-nav">
        <div className="top-header">
          <img className="img-naira" src={NairaSign} alt="Naira-sign" />
          <nav className="htext">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </nav>
        </div>
        <main className="texts">
          <aside className="love">we all love</aside>
          <aside className="nature">nature</aside>
            Look deep into nature, and you will understand everything better.
          <div className="g-icon">Get Started</div>
        </main>
        
      </section>

      <section className="body">
        <aside className="services">Our Services</aside>

        <div className="services-card">
          <div className="card">
            <img src={WebDesign} alt="Web-design" />
            <section className="card-title">Web Design</section>
            <main className="card-body">
              Focus on how you can help and benefit your user. use simple words
              so that you don't confuse people
            </main>
          </div>

          <div className="card">
            <img src={GraphicDesign} alt="Graphic-design" />
            <section className="card-title">Graphic Design</section>
            <main className="card-body">
              Focus on how you can help and benefit your user. use simple words
              so that you don't confuse people
            </main>
          </div>

          <div className="card">
            <img src={ContentCreation} alt="Content-creation" />
            <section className="card-title">Content Creation</section>
            <main className="card-body">
              Focus on how you can help and benefit your user. use simple words
              so that you don't confuse people
            </main>
          </div>
        </div>
      </section>

      <section className="body2">
        <div className="body2Image">
          <img
            className="comma"
            src={InvertedCommaAd}
            alt="Inverted-comma-ad"
          />
        </div>
        <main className="body2text">
          “Original and with an innate understanding of their customer’s needs,
          the team at Love Nature are always a pleasure to work with.”
        </main>
        <div className="janeImage">
          <img src={JanePix} alt="Jane-pix" />
        </div>
        <section className="janeText">Jane Miller</section>
      </section>

      <div className="body3">
        <div className="body3Left">
          <section className="about">ABOUT US</section>
          <main className="tellText">
            Tell webside visitors who you are and why they should choose your
            business.
          </main>
          <main className="becouseText">
            Because when a visitor first lands on your website, you’re a
            stranger to them. They have to get to know you in order to want to
            read your blog posts, subscribe to your email newsletter, or buy
            what you’re selling.
          </main>
          <input className="f-input" type="text" placeholder="Find Out More" />
        </div>

        <div className="body3Right">
          <img src={FlowerHand} alt="Flower-hand" />
        </div>
      </div>


      <div className="body4">
        <section className="question">QUESTIONS?</section>
          <main className="whetherText">
            Whether you’re curious about features, a free trial, or even press,
            we’re here to answer any questions.
          </main>
          <nav className="l-icon">Let's Talk Now</nav>
       
      </div>

      
        <section className="footer-nav">

            <nav className="ftext">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </nav>
            <img className="img-nairab" src={NairaSignb} alt="Naira-sign-b" />
            <aside className="loveNature">Love Nature by Tyler Moore</aside>
         
        </section>
      
    </div>
  );
}

export default Nature;

import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/user/user.actions";
import { withRouter } from "react-router-dom";
import tawkTo from "tawkto-react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/MailOutline";
import CreditCard from "@material-ui/icons/CreditCard";
import Wallet from "@material-ui/icons/AccountBalanceWallet";
import Book from "@material-ui/icons/BookOutlined";
import Chart from "@material-ui/icons/BarChart";

// import "./style.css";

// import Modal from "@material-ui/core/Modal";
// import Spinner from "../../components/spinner/spinner.component";
// import Progress from "../../components/Progress";
// import OTP from "../../components/otp";

const HomePage = ({ logout }) => {
  // const [modal, setModal] = useState(false);
  const tawkToPropertyId = "5f92cb34194f2c4cbeb868e0";
  useEffect(() => {
    tawkTo(tawkToPropertyId);
  }, []);

  return (
    <Fragment>
      <a
        href="https://wa.me/8054097108"
        className="bg-success"
        style={{
          position: "fixed",
          bottom: "3%",
          left: "2%",
          zIndex: "100",
          borderRadius: "100%",
          padding: "10px",
        }}
      >
        <i
          className="text-white la la-whatsapp"
          style={{ fontSize: "40px" }}
        ></i>
      </a>
      <section id="home" classNameName="home">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src="images/2.jpg"
                alt="First slide"
              />
              <div
                style={{ display: "absolute", top: "20%" }}
                className="carousel-caption "
              >
                <h2 style={{ textShadow: "1px 2px 1px black", color: "white" }}>
                  Advance Credit Repair System
                </h2>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    textShadow: "1px 2px 1px black",
                  }}
                >
                  Your big break from rejected loan applications and high
                  interests.
                  <br />
                  We can help you build your credit score within few days/weeks
                </p>
                <div>
                  <a
                    href="https://wa.me/8054097108"
                    className="btn btn-success"
                  >
                    <WhatsAppIcon />
                  </a>
                  <a
                    href="mailto:Creativecreditfix01@gmail.com"
                    className="btn btn-success"
                  >
                    <EmailIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src="https://news.bitcoin.com/wp-content/uploads/2020/06/average-price-of-bitcoin-more-than-quadrupled-between-reward-halvings.jpg"
                alt="Second slide"
              />
              <div
                style={{ display: "absolute", top: "20%" }}
                className="carousel-caption "
              >
                <h2 style={{ textShadow: "1px 2px 1px black", color: "white" }}>
                  BITCOIN MINING
                </h2>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    textShadow: "1px 2px 1px black",
                  }}
                >
                  Earn passive income from cloud mining bitcoins in a.
                  <br />
                  secure digital environment
                </p>
                <div>
                  <a
                    href="https://wa.me/8054097108"
                    className="btn btn-success"
                  >
                    <WhatsAppIcon />
                  </a>
                  <a
                    href="mailto:Creativecreditfix01@gmail.com"
                    className="btn btn-success"
                  >
                    <EmailIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
      <section id="about" className="about-top pt-0 ">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-12">
              <div className="title mb-0">
                <h2 className="text-center">
                  <span className="text-success">OUR SERVICES</span>
                  <hr />
                </h2>
              </div>
            </div>
            <div className="col-12">
              <ul className="feature-box row">
                <li className="feature-item col-md-5">
                  <CreditCard
                    style={{ fontSize: "50px" }}
                    className="text-success"
                  />
                  <h4 className="mb-3">Credit Repair</h4>
                  <p>
                    Building a solid credit history and maintaining a high
                    credit score can have a dramatic impact on your quality of
                    life now and …
                  </p>
                </li>
                <li className="feature-item col-md-5">
                  <Wallet
                    style={{ fontSize: "50px" }}
                    className="text-success"
                  />
                  <h4 className="mb-3">Credit Card Debt</h4>
                  <p>
                    A good credit balance is important for anyone to have. Loans
                    are a necessary part of life for most of us.
                  </p>
                </li>
                <li className="feature-item col-md-5">
                  <Book style={{ fontSize: "50px" }} className="text-success" />
                  <h4 className="mb-3">Criminal Records</h4>
                  <p>
                    An expungement proceeding is a type of in which a first time
                    offender of a prior conviction seeks that the records
                  </p>
                </li>
                <li className="feature-item col-md-5">
                  <Chart
                    style={{ fontSize: "50px" }}
                    className="text-success"
                  />
                  <h4 className="mb-6">Tradelines</h4>
                  <p>
                    Tradelines are an account listed on your credit report. For
                    example, a credit card, car note, student loans, or a
                    mortgage are all considered tradelines.
                  </p>
                </li>

                <li className="feature-item col-md-5">
                  <i class="la la-btc text-success" aria-hidden="true"></i>
                  <h4 className="mb-3">Bitcoin Mining</h4>
                  <p>
                    Bitcoin mining is how the bitcoin network keeps its
                    transactions secure. As a reward for doing the work to track
                    and secure transactions…
                  </p>
                </li>

                <li className="feature-item col-md-5">
                  <i class="la la-globe text-success" aria-hidden="true"></i>
                  <h4 className="mb-3">Website Hacking</h4>
                  <p>
                    About 2 billion logins to most popular social network are
                    taking place daily. Taking all the above under account…
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="counters pb-0 pt-0">
        <div class="container">
          <div className="title mb-0">
            <h2 className="text-center">
              Building Strategies for Your{" "}
              <span className="text-success mt-8"> Financial Future</span>
              <hr />
            </h2>
          </div>

          <hr />
          <div class="row">
            <div class="col-lg-3 col-sm-6 mb-3 mb-lg-0">
              <div class="counter-item bg-success">
                <i class="la la-briefcase"></i>
                <h2 class="text-white">
                  <span class="count">233</span>+
                </h2>
                <p class="text-white">PROJECTS COMPLETED</p>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6  mb-3 mb-sm-0">
              <div class="counter-item bg-success">
                <i class="la la-users"></i>
                <h2 class="text-white">
                  <span class="count">24</span>+
                </h2>
                <p class="text-white">HACKERS EMPLOYED</p>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6 mb-3 mb-sm-0">
              <div class="counter-item bg-success">
                <i class="la la-medal"></i>
                <h2 class="text-white">
                  <span class="count">976</span>+
                </h2>
                <p class="text-white">LOYAL FOLLOWERS</p>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="counter-item bg-success">
                <i class="la la-trophy"></i>
                <h2 class="text-white">
                  <span class="count">280</span>+
                </h2>
                <p class="text-white">SATISFIED CUSTOMER</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="blog" className="blog pb-0">
        <div className="container">
          <div className="title mb-0">
            <h2 className="text-center">
              We are Unique <hr />
            </h2>
          </div>
          <div className="row align-items-md-center wow fadeInUp">
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    style={{ height: "200px" }}
                    src="https://creditbackdoors.com/wp-content/uploads/2018/05/apps.48503.14583974841368285.ec9f9696-6464-4300-b8f8-d0d7d38a33d5.383cbbe4-3b7f-4b92-aaa0-de5c41402e94-550x432.jpg"
                    alt="001001"
                  />
                </div>
                <div className="blog-content">
                  <h4 className="mb-3">Boost Credit Score</h4>

                  <a
                    className="font-weight-bold alt-font"
                    href="https://wa.me/8054097108"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    style={{ height: "200px" }}
                    src="https://creditbackdoors.com/wp-content/uploads/2018/05/Bitcoin-Mining-Intensifies-During-Q4-of-2016-545x255.jpg"
                    alt="001001"
                  />
                </div>
                <div className="blog-content">
                  <h4 className="mb-3">Bitcoin Mining</h4>

                  <a
                    className="font-weight-bold alt-font"
                    href="https://wa.me/8054097108"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-md-0">
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    style={{ height: "200px" }}
                    src="https://creditbackdoors.com/wp-content/uploads/2018/05/cre.jpg"
                    alt="001001"
                  />
                </div>
                <div className="blog-content">
                  <h4 className="mb-3">Card payment</h4>

                  <a
                    href="https://wa.me/8054097108"
                    className="font-weight-bold alt-font"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    style={{ height: "200px" }}
                    src="https://creditbackdoors.com/wp-content/uploads/2016/01/expu-265x183.jpg"
                    alt="001001"
                  />
                </div>
                <div className="blog-content">
                  <h4 className="mb-3">Expungement</h4>

                  <a
                    className="font-weight-bold alt-font"
                    href="https://wa.me/8054097108"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="carousel slide" data-ride="carousel" id="postsCarousel">
        <div class="container p-t-0 m-t-2 carousel-inner ml-3">
          <div class="row row-equal carousel-item active m-t-0">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="card">
                <div class="card-img-top card-img-top-250">
                  <img
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "100%",
                    }}
                    class="img-fluid"
                    src="https://creditbackdoors.com/wp-content/uploads/2016/01/IMG_2083-100x100-1.jpg"
                    alt="Carousel 1"
                  />
                </div>
                <div class="card-block p-4">
                  <h6 class="small text-wide p-b-2">Amanda SeyFried</h6>
                  <p>
                    Basically, expunged records are ones that no longer legally
                    exist.In theory, having a record expunged means that it is
                    deleted from all publicly accessible databases or court
                    files. The specifics depend on the state laws, but
                    generally, charges, arrests, and minor convictions are all
                    legally eligible to be expunged.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-equal carousel-item m-t-0">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="card" style={{ justifyContent: "center" }}>
                <div
                  class="card-img-top card-img-top-250"
                  style={{ margin: "auto" }}
                >
                  <img
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "100%",
                    }}
                    class="img-fluid"
                    src="https://creditbackdoors.com/wp-content/uploads/2018/01/testimonial-3-1-350x348-1.jpg"
                    alt="Carousel 4"
                  />
                </div>
                <div class="card-block p-4">
                  <h6 class="small text-wide p-b-2">Donald Simpson</h6>
                  <p>
                    I trusted in their administration and they didn’t leave me
                    in any hazard, they helped me accomplished my dream score
                    which is 800, thank you Creative CreditFix
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="price" class="price text-center">
        <div class="container">
          <div class="row mb-3">
            <div class="col-sm-12">
              <div class="title mb-5">
                <h5 class="mb-2">Select the best available packages</h5>
                <h2>Simple, Affordable Pricing </h2>
              </div>
            </div>
          </div>
          <div class="row wow fadeInUp">
            <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
              <div class="price-item">
                <h5 class="mb-3 text-center alt-font font-weight-bold alt-color">
                  Basic
                </h5>
                <hr />
                <h2 class="font-weight-bold alt-font mb-1 text-center">
                  $1,200
                </h2>

                <ul class="p-0 price-list green list-unstyled">
                  <li>
                    <i class="la la-check"></i>Standard Negative Deletions
                  </li>
                  <li>
                    <i class="la la-check"></i>Minor Disputes
                  </li>
                  <li>
                    <i class="la la-check"></i>Bad Debt Collector Disputes
                  </li>
                  <li>
                    <i class="la la-check"></i>Correct Payment History
                  </li>
                  <li>
                    <i class="la la-check"></i>New trade lines up to $3,500.00 –
                    additional fees apply
                  </li>
                  <li>
                    <i class="la la-check"></i>Includes Opt-Out Reporting
                  </li>
                  <li>
                    <i class="la la-check"></i>Up to 10 deletions and 10 late
                    payments updated
                  </li>
                </ul>
                <a
                  href="https://wa.me/8054097108"
                  class="btn btn-large btn-green d-block mt-3"
                >
                  Get The Package Now
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
              <div class="price-item">
                <h5 class="mb-3 text-center alt-font font-weight-bold alt-color">
                  Premium
                </h5>
                <hr />
                <h2 class="font-weight-bold alt-font mb-1 text-center">
                  $1,500
                </h2>

                <ul class="p-0 price-list green list-unstyled">
                  <li>
                    <i class="la la-check"></i>Minimum Negative Deletions
                  </li>
                  <li>
                    <i class="la la-check"></i>Minor Disputes
                  </li>
                  <li>
                    <i class="la la-check"></i>Basic Clean Up
                  </li>
                  <li>
                    <i class="la la-check"></i>Correct Payment History
                  </li>
                  <li>
                    <i class="la la-check"></i>(2-3 Weeks turn around) Score
                    hack – 790
                  </li>
                  <li>
                    <i class="la la-check"></i>Includes Opt-Out Reporting
                  </li>
                  <li>
                    <i class="la la-check"></i>Up to 20 deletions and 10 late
                    payments updated
                  </li>
                </ul>
                <a
                  href="https://wa.me/8054097108"
                  class="btn btn-large btn-green d-block mt-3"
                >
                  Get The Package Now
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
              <div class="price-item">
                <h5 class="mb-3 text-center alt-font font-weight-bold alt-color">
                  Professional
                </h5>
                <hr />
                <h2 class="font-weight-bold alt-font mb-1 text-center">
                  Contact Us
                </h2>

                <ul class="p-0 price-list green list-unstyled">
                  <li>
                    <i class="la la-check"></i>All Basic Package
                  </li>
                  <li>
                    <i class="la la-check"></i>Advanced Deletions and Public
                    Records
                  </li>
                  <li>
                    <i class="la la-check"></i>Heavy Credit Disputes
                  </li>
                  <li>
                    <i class="la la-check"></i>Bad Debt Collector Disputes
                  </li>
                  <li>
                    <i class="la la-check"></i>New trade lines up to $10,000.00
                  </li>
                  <li>
                    <i class="la la-check"></i>Includes Opt-Out Reporting
                  </li>
                  <li>
                    <i class="la la-check"></i>Unlimited deletions and Unlimited
                    payments updated
                  </li>
                </ul>
                <a
                  href="https://wa.me/8054097108?text=Send direct message to Creative Creditfix admin"
                  class="btn btn-large btn-green d-block mt-3"
                >
                  Get The Package Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer-area section-padding">
        <div class="container">
          <div class="row text-md-left text-center">
            <div class="col-lg-6 col-md-6">
              <h3 class="mb-3 text-white">Company</h3>
              <p class="text-white">
                Creative Creditfix represents one of the many branches of the
                highly organized I.T. Experts, Forensic experts and Credit
                repair specialists organization funded with the aim of proving
                the best digital intrusion and expunction services to the
                public. Our hackers have been serving clients globally, with
                active backdoor access to thousands of major servers worldwide.
                Our focus enables us to provide customized solutions and
                actionable recommendations that draw on robust problem framing,
                cutting-edge technology, deep therapeutic area knowledge,
                extensive global hacker-space.
              </p>
            </div>

            <div class="col-lg-6 col-md-12 mt-4 mt-lg-0">
              <h3 class="mb-3 text-white">We Are Social</h3>
              <ul class="footer-icon">
                <li>
                  <a
                    href="https://wa.me/8054097108?text=Send direct message to Creative Creditfix admin"
                    class="facebook-text-hvr"
                  >
                    <i class="la la-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Creativecreditfix01@gmail.com"
                    class="twitter-text-hvr"
                  >
                    <i class="la la-envelope"></i>
                  </a>
                </li>
              </ul>

              <h6 class="text-white mb-3">Ocassionally hear from us</h6>
              <label class="input-group footer-mail">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter Email Address"
                />
                <a
                  class="btn btn-medium btn-green btn-hvr-white"
                  href="mailto:Creativecreditfix01@gmail.com"
                >
                  YES I'M IN
                </a>
              </label>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  user: state.user.user,
});
const mapdisToProps = (dis) => ({
  logout: () => dis(logout()),
});
export default connect(mapStateToProps, mapdisToProps)(withRouter(HomePage));

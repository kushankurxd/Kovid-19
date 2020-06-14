import { connect } from "react-redux";

const footer = (props) => {
  return (
    <footer
      className={
        props.darkTheme
          ? "nk-footer bg-white has-overlay"
          : "nk-footer bg-dark tc-light has-overlay"
      }
      id={"footer"}
    >
      <div className="overlay shape shape-c"></div>
      <section
        className={
          props.darkTheme
            ? "section section-footer section-m"
            : "section section-footer section-m tc-light"
        }
      >
        <div className="container">
          <div className="nk-footer-top">
            <div className="row g-gs gy-m">
              <div className="col-lg-3 col-md-9 mr-auto">
                <div className="wgs wgs-about">
                  <div className="wgs-logo logo">
                    {" "}
                    <a href="#footer" className="logo-link">
                      {" "}
                      <img
                        className="logo-dark"
                        src="/logo-dark.png"
                        alt="logo"
                      />{" "}
                      <img
                        className="logo-light"
                        src="/logo-white.png"
                        alt="logo"
                      />{" "}
                    </a>
                  </div>
                  <div className="wgs-about-text">
                    <p>
                      This website is for health information and advice about
                      coronavirus (COVID-19), how to prevent and protect
                      yourself from disease.
                    </p>
                    <p>
                      Learn about the government response to coronavirus on
                      GOV.IN.
                    </p>
                  </div>
                  <ul className="wgs-social">
                    <li>
                      <a href="#footer">
                        <em className="icon ni ni-facebook-f"></em>
                      </a>
                    </li>
                    <li>
                      <a href="#footer">
                        <em className="icon ni ni-twitter"></em>
                      </a>
                    </li>
                    <li>
                      <a href="#footer">
                        <em className="icon ni ni-youtube-fill"></em>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-lg-2">
                <div className="wgs wgs-menu">
                  <h6 className="wgs-title">Quick Link</h6>
                  <ul className="wgs-links">
                    <li>
                      <a className="scrollto" href="#symptoms">
                        Symptoms
                      </a>
                    </li>
                    <li>
                      <a className="scrollto" href="#prevention">
                        Prevention
                      </a>
                    </li>
                    <li>
                      <a className="scrollto" href="#protect">
                        Protect Youself
                      </a>
                    </li>
                    <li>
                      <a className="scrollto" href="#faq">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a className="scrollto" href="#about">
                        About Corona
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div className="wgs wgs-menu">
                  <h6 className="wgs-title">Helpfull link</h6>
                  <ul className="wgs-links">
                    <li>
                      <a href="#footer">Healthcare Professionals</a>
                    </li>
                    <li>
                      <a href="#footer">Healthcare Facilities</a>
                    </li>
                    <li>
                      <a href="#footer">Older Adults & Medical Conditions</a>
                    </li>
                    <li>
                      <a href="#footer">Repare your Family</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-lg-2">
                <div className="wgs wgs-menu">
                  <h6 className="wgs-title">Important Link</h6>
                  <ul className="wgs-links">
                    <li>
                      <a href="https://www.who.int/">WHO Website</a>
                    </li>
                    <li>
                      <a href="https://www.cdc.gov/">CDC Website</a>
                    </li>
                    <li>
                      <a href="https://www.nhs.uk/">NHS Website</a>
                    </li>
                    <li>
                      <a href="https://www.health.harvard.edu/">
                        Harvard Health
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="nk-footer-bottom">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="nk-copyright">&copy; 2020 KOVID-19.</p>
              </div>
              <div className="col-md-6">
                <ul className="nk-footer-links justify-content-md-end">
                  <li>
                    <a href="#footer">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="nk-dislaimer">
                  <p>
                    Disclaimer: We hope you find the information presented on
                    this website useful. This website is for general information
                    and raise awareness of (2019-nCoV) only.{" "}
                    <br className="d-none d-lg-block" /> All the information
                    based on WHO, NHS and CDC website. Information on our
                    website is meant for awareness, if you have any doubt please
                    verify from respective site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

const mapStateToProps = (state) => {
  return {
    darkTheme: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(footer);

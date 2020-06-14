import { connect } from "react-redux";

const section_1 = (props) => {
  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-dark tc-light section-about"
          : "section section-l bg-white section-about"
      }
      id="about"
    >
      <div className="container">
        <div className="section-content">
          <div className={["row g-gs justify-content-between"].join(" ")}>
            <div className="col-lg-7">
              <div className="text-block">
                <h5 className="subtitle">About the disease</h5>
                <h2 className="title">
                  Coronavirus <br className="d-sm-none" />
                  (COVID-19)
                </h2>
                <p className="lead">
                  <strong>
                    COVID-19 is a new illness that can affect your lungs and
                    airways.
                  </strong>{" "}
                  It's caused by a virus called coronavirus. It was discovered
                  in December 2019 in Wuhan, Hubei, China.
                </p>
                <p>
                  Common signs of infection include respiratory symptoms, fever,
                  cough, shortness of breath and breathing difficulties. In more
                  severe cases, infection can cause pneumonia, severe acute
                  respiratory syndrome, kidney failure and even death.
                </p>
                <p>
                  Standard recommendations to prevent infection spread include
                  regular hand washing, covering mouth and nose when coughing
                  and sneezing, thoroughly cooking meat and eggs. Avoid close
                  contact with anyone showing symptoms of respiratory illness
                  such as coughing and sneezing.
                </p>
              </div>
            </div>
            <div className={["col-lg-5 col-xl-4"].join(" ")}>
              <div
                className={
                  props.darkTheme
                    ? "wgs wgs-card mt-sm-2 mt-md-4 mt-lg-0 ml-lg-4 ml-xl-0 bg-dark"
                    : "wgs wgs-card mt-sm-2 mt-md-4 mt-lg-0 ml-lg-4 ml-xl-0"
                }
              >
                <div className="wgs-head">
                  <h4>What you need to know</h4>
                </div>
                <ul className="wgs-list">
                  <li>
                    <a className="scrollto" href="#spread">
                      How coronavirus is spread
                    </a>
                  </li>
                  <li>
                    <a className="scrollto" href="#symptoms">
                      Symptoms of coronavirus
                    </a>
                  </li>
                  <li>
                    <a className="scrollto" href="#protect">
                      How to protect yourself
                    </a>
                  </li>
                  <li>
                    <a className="scrollto" href="#treatment">
                      Treatment for coronavirus
                    </a>
                  </li>
                  <li>
                    <a className="scrollto" href="#faq">
                      Myth-Busters of coronavirus
                    </a>
                  </li>
                  <li>
                    <a className="scrollto" href="#faq">
                      Questions & answers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    darkTheme: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(section_1);

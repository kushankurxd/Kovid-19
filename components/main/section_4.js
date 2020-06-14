import { connect } from "react-redux";

const section_4 = (props) => {
  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-dark tc-light section-advice pb-0 ov-h"
          : "section section-l bg-light section-advice pb-0 ov-h"
      }
      id="prevention"
    >
      <div className="container">
        <div className={["section-head text-center wide-lg"].join(" ")}>
          <h5 className="subtitle">How to Protect Yourself?</h5>
          <h2 className="title">
            Prevention <br className="d-sm-none" /> &amp; advice
          </h2>
          <p>
            There is currently no vaccine to prevent coronavirus disease 2019
            (COVID-19).{" "}
            <strong>
              The best way to prevent illness is to avoid being exposed to this
              virus.
            </strong>{" "}
            Stay aware of the latest information on the COVID-19 outbreak,
            available on the WHO website and through your national and local
            public health authority.
          </p>
        </div>
        <div className="section-content">
          <div className={["row g-gs gy-sm-m"].join(" ")}>
            <div className={["col-lg-3 col-sm-6"].join(" ")}>
              <div className="box3">
                <div className="box3-gfx">
                  {" "}
                  <img src="/gfx/advice-a.png" alt="" />
                </div>
                <div className="box3-content">
                  <h5 className="title">Wash your hands frequently</h5>
                  <p>
                    Regularly and thoroughly clean your hands with an
                    alcohol-based hand rub or wash them with soap and water for
                    at least 20 seconds.
                  </p>
                </div>
              </div>
            </div>
            <div className={["col-lg-3 col-sm-6"].join(" ")}>
              <div className="box3">
                <div className="box3-gfx">
                  {" "}
                  <img src="/gfx/advice-b.png" alt="" />
                </div>
                <div className="box3-content">
                  <h5 className="title">Maintain social distancing</h5>
                  <p>
                    Maintain at least 1 metre (3 feet) distance between yourself
                    & anyone who is coughing or sneezing. If you are too close,
                    get chance to infected.
                  </p>
                </div>
              </div>
            </div>
            <div className={["col-lg-3 col-sm-6"].join(" ")}>
              <div className="box3">
                <div className="box3-gfx">
                  {" "}
                  <img src="/gfx/advice-c.png" alt="" />
                </div>
                <div className="box3-content">
                  <h5 className="title">Avoid touching face</h5>
                  <p>
                    Hands touch many surfaces and can pick up viruses. So, hands
                    can transfer the virus to your eyes, nose or mouth and can
                    make you sick.
                  </p>
                </div>
              </div>
            </div>
            <div className={["col-lg-3 col-sm-6"].join(" ")}>
              <div className="box3">
                <div className="box3-gfx">
                  {" "}
                  <img src="/gfx/advice-d.png" alt="" />
                </div>
                <div className="box3-content">
                  <h5 className="title">Practice respiratory hygiene</h5>
                  <p>
                    Maintain good respiratory hygiene as covering your mouth &
                    nose with your bent elbow or tissue when cough or sneeze.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="section-actions">
            <li>
              <a href="#handwash" className={["btn scrollto"].join(" ")}>
                <span>Check how you wash hand</span>
                <em className={["icon ni ni-arrow-long-right"].join(" ")}></em>
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className={["btn btn-transparent scrollto"].join(" ")}
              >
                <span>Q&A on Coronaviruses</span>
                <em className={["icon ni ni-arrow-long-right"].join(" ")}></em>
              </a>
            </li>
          </ul>
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

export default connect(mapStateToProps)(section_4);

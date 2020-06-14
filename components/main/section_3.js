import { connect } from "react-redux";

const section_3 = (props) => {
  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-dark tc-light section-symptom"
          : "section section-l bg-white section-symptom"
      }
      id="symptoms"
    >
      <div className="container">
        <div className={["section-head text-center wide-lg"].join(" ")}>
          <h5 className="subtitle">What are the symptoms of COVID-19?</h5>
          <h2 className="title">Symptoms of Coronavirus</h2>
          <p>
            The most common symptoms of COVID-19 are fever, tiredness, and dry
            cough. Some patients may have aches and pains, nasal congestion,
            runny nose, sore throat or diarrhea. These symptoms are usually mild
            and begin gradually. Also the symptoms may appear 2-14 days after
            exposure.
          </p>
        </div>
        <div className="section-content">
          <div className={["row g-gs justify-content-center"].join(" ")}>
            <div className={["col-sm-10 col-md-8 col-lg-4"].join(" ")}>
              <div className={props.darkTheme ? "box2 bg-dark" : "box2"}>
                <div className="box2-gfx">
                  {" "}
                  <img src="/gfx/symptom-a.png" alt="" />
                </div>
                <div className="box2-content">
                  <h5 className="title">Fever</h5>
                  <p>
                    <strong>High Fever</strong> – this means you feel hot to
                    touch on your chest or back (you do not need to measure your
                    temperature). It is a common sign and also may appear in
                    2-10 days if you affected.
                  </p>
                </div>
              </div>
            </div>
            <div className={["col-sm-10 col-md-8 col-lg-4"].join(" ")}>
              <div className={props.darkTheme ? "box2 bg-dark" : "box2"}>
                <div className="box2-gfx">
                  {" "}
                  <img src="/gfx/symptom-b.png" alt="" />
                </div>
                <div className="box2-content">
                  <h5 className="title">Cough</h5>
                  <p>
                    <strong>Continuous cough</strong> – this means coughing a
                    lot for more than an hour, or 3 or more coughing episodes in
                    24 hours (if you usually have a cough, it may be worse than
                    usual).
                  </p>
                </div>
              </div>
            </div>
            <div className={["col-sm-10 col-md-8 col-lg-4"].join(" ")}>
              <div className={props.darkTheme ? "box2 bg-dark" : "box2"}>
                <div className="box2-gfx">
                  {" "}
                  <img src="/gfx/symptom-c.png" alt="" />
                </div>
                <div className="box2-content">
                  <h5 className="title">Shortness of breath</h5>
                  <p>
                    <strong>Difficulty breathing</strong> – Around 1 out of
                    every 6 people who gets COVID-19 becomes seriously ill and
                    develops difficulty breathing or shortness of breath.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-cta">
            <div className={["row g-gs justify-content-center"].join(" ")}>
              <div
                className={["col-sm-10 col-md-8 col-lg-7 col-xl-8"].join(" ")}
              >
                <div className="notes">
                  <em className={["icon ni ni-alert-fill-c"].join(" ")}></em>
                  <p>
                    <strong>Stay at home and call your doctor:</strong> If you
                    think you have been exposed to COVID-19 and develop a fever
                    and any symptoms, such as cough or difficulty breathing,
                    call your healthcare provider as soon as possible for
                    medical advice.
                  </p>
                </div>
              </div>
              <div
                className={["col-sm-10 col-md-8 col-lg-5 col-xl-4"].join(" ")}
              >
                <div
                  className={[
                    "d-flex justify-content-lg-end ml-sm-5 ml-4 pl-3 ml-lg-0 pl-lg-0",
                  ].join(" ")}
                >
                  {" "}
                  <a href="#faq" className={["btn scrollto"].join(" ")}>
                    <em className={["icon ni ni-question"].join(" ")}></em>
                    <span>Have question? Find answer.</span>
                  </a>
                </div>
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

export default connect(mapStateToProps)(section_3);

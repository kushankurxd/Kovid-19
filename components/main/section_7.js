import { connect } from "react-redux";

const section_7 = (props) => {
  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-accent-dark tc-light section-treatment has-overlay"
          : "section section-l bg-accent-light tc-light section-treatment has-overlay"
      }
      id="treatment"
    >
      <div className={["overlay shape shape-b"].join(" ")}></div>
      <div className="container">
        <div className="section-content">
          <div
            className={[
              "row g-gs gy-sm-m justify-content-between align-items-center",
            ].join(" ")}
          >
            <div className={["col-lg-7 col-xl-6"].join(" ")}>
              <div className="text-block">
                <h5 className="subtitle">Be carefull & Stay Safe</h5>
                <h2 className="title">Treatment for coronavirus</h2>
                <p>
                  {" "}
                  <strong>
                    To date, there is no vaccine and no specific antiviral
                    medicine to prevent or treat COVID-2019.{" "}
                  </strong>{" "}
                  However, those affected should receive care to relieve
                  symptoms. People with serious illness should be hospitalized.
                  Most patients recover thanks to supportive care.
                </p>
                <p>
                  Antibiotics do not help, as they do not work against viruses.
                  Treatment aims to relieve the symptoms while your body fights
                  the illness. You'll need to stay in isolation, away from other
                  people, until you have recovered.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className={["box5 bg-accent-dark"].join(" ")}>
                <h6 className="title">Self Care</h6>
                <p>
                  If you have mild symptoms, stay at home until you’ve
                  recovered. You can relieve your symptoms if you:
                </p>
                <ul className="list-arrow">
                  <li>Rest and sleep</li>
                  <li>Keep warm</li>
                  <li>Drink plenty of liquids</li>
                  <li>
                    Use a room humidifier or take a hot shower to help ease a
                    sore throat and cough
                  </li>
                </ul>
                <h6 className="title">Medical Treatments</h6>
                <p>
                  If you develop a fever, cough, and have difficulty breathing,
                  promptly seek medical care. Call in advance and tell your
                  health provider of any recent travel or recent contact with
                  travelers.
                </p>
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

export default connect(mapStateToProps)(section_7);

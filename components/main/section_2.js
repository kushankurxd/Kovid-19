import { connect } from "react-redux";

const section_2 = (props) => {
  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-dark tc-light section-spread"
          : "section section-l bg-light section-spread"
      }
      id="spread"
    >
      <div className="container">
        <div className={["section-head text-center wide-md"].join(" ")}>
          <h5 className="subtitle">How coronavirus is spread</h5>
          <h2 className="title">
            Transmission of <br className="d-sm-none" /> COVID-19
          </h2>
          <p>
            Because it's a new illness, we do not know exactly how coronavirus
            spreads from person to person. Similar viruses are spread in cough
            droplets.
          </p>
        </div>
        <div className="section-content">
          <div className={["row g-gs justify-content-center"].join(" ")}>
            <div className={["col-sm-10 col-md-8 col-lg-4"].join(" ")}>
              <div className={props.darkTheme ? "box bg-dark" : "box"}>
                <div className="box-gfx">
                  {" "}
                  <img src="/gfx/spread-a.png" alt="" />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    Person-to-person spread as close contact with infected
                  </h4>
                  <p>
                    The coronavirus is thought to spread mainly from person to
                    person. This can happen between people who are in close
                    contact with one another.
                  </p>
                </div>
              </div>
            </div>
            <div className={["col-sm-10 col-md-8 col-lg-4"].join(" ")}>
              <div className={props.darkTheme ? "box bg-dark" : "box"}>
                <div className="box-gfx">
                  {" "}
                  <img src="/gfx/spread-b.png" alt="" />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    Touching or contact with infected surfaces or objects
                  </h4>
                  <p>
                    A person can get COVID-19 by touching a surface or object
                    that has the virus on it and then touching their own mouth,
                    nose, or possibly their eyes.
                  </p>
                </div>
              </div>
            </div>
            <div className={["col-sm-10 col-md-8 col-lg-4"].join(" ")}>
              <div className={props.darkTheme ? "box bg-dark" : "box"}>
                <div className="box-gfx">
                  {" "}
                  <img src="/gfx/spread-c.png" alt="" />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    Droplets that from infected person coughs or sneezes
                  </h4>
                  <p>
                    The coronavirus is thought to spread mainly from person to
                    person. This can happen between people who are in close
                    contact with one another.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="section-actions">
            <li>
              <a href="#faq" className={["btn scrollto"].join(" ")}>
                <em className={["icon ni ni-question"].join(" ")}></em>
                <span>Have question about spreading?</span>
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

export default connect(mapStateToProps)(section_2);

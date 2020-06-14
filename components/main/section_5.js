import { connect } from "react-redux";

const section_5 = (props) => {
  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-dark tc-light section-steps pb-4"
          : "section section-l bg-light section-steps pb-4"
      }
      id="steps"
    >
      <div className="container">
        <div
          className={
            props.darkTheme
              ? "section-content section-content-boxed bg-dark"
              : "section-content section-content-boxed"
          }
        >
          <div
            className={[
              "row g-gs justify-content-center align-items-center",
            ].join(" ")}
          >
            <div className="col-lg-8">
              <div className={["list-block pr-lg-4"].join(" ")}>
                <h4 className="title">Take steps to protect others</h4>
                <ul className="list-check">
                  <li>
                    <strong>Stay home if you’re sick</strong> – Stay home if you
                    are sick, except to get medical care.
                  </li>
                  <li>
                    <strong>Cover your mouth and nose</strong> – with a tissue
                    when you cough or sneeze (throw used tissues in the trash)
                    or use the inside of your elbow.
                  </li>
                  <li>
                    <strong>Wear a facemask if you are sick</strong> – You
                    should wear a facemask when you are around other people
                    (e.g., sharing a room or vehicle) and before you enter a
                    healthcare provider’s
                  </li>
                  <li>
                    <strong>
                      Clean AND disinfect frequently touched surfaces daily
                    </strong>{" "}
                    – This includes phones, tables, light switches, doorknobs,
                    countertops, handles, desks, toilets, faucets, and sinks.
                  </li>
                  <li>
                    <strong>Clean the dirty surfaces</strong> – Use detergent or
                    soap and water prior to disinfection.
                  </li>
                  <li>
                    <strong>
                      Stay informed about the local COVID-19 situation
                    </strong>{" "}
                    – Get up-to-date information about local COVID-19 activity
                    from <a href="#steps">public health officials.</a>
                  </li>
                  <li>
                    <strong>Dedicated, lined trash can</strong> – If possible,
                    dedicate a lined trash can for the ill person. Use gloves
                    when removing garbage bags, and handling & disposing of
                    trash.
                  </li>
                </ul>
              </div>
            </div>
            <div className={[" col-sm-10 col-md-8 col-lg-4"].join(" ")}>
              {" "}
              <img
                src="/gfx/steps.png"
                className={["mb-2 mb-sm-0"].join(" ")}
                alt=""
              />
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

export default connect(mapStateToProps)(section_5);

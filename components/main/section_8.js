import { connect } from "react-redux";

const section_8 = (props) => {
  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-dark tc-light section-protect"
          : "section section-l bg-light section-protect"
      }
      id="protect"
    >
      <div className="container">
        <div className={["section-head text-center wide-lg"].join(" ")}>
          <h5 className="subtitle">Do’s &amp; Don’ts</h5>
          <h2 className="title">Protect yourself</h2>
          <p>
            The best thing you can do now is plan for how you can adapt your
            daily routine. Take few steps to protect yourself as Clean your
            hands often, Avoid close contact, Cover coughs and sneezes, clean
            daily used surfaces etc. The best way to prevent illness is to avoid
            being exposed to this virus.
          </p>
        </div>
        <div className="section-content">
          <div
            className={["row g-gs justify-content-center flex-lg-nowrap"].join(
              " "
            )}
          >
            <div
              className={["col-md-8 col-lg-5 col-xl-6 align-self-end"].join(
                " "
              )}
            >
              <div className="protect-block-gfx">
                {" "}
                <img src="/gfx/protect.png" alt="" />
              </div>
            </div>
            <div
              className={[
                "col-6 col-mb-5 col-sm-6 col-lg-4 col-xl-3 flex-grow-1 order-lg-first",
              ].join(" ")}
            >
              <div className={["protect-item negative"].join(" ")}>
                <div className="protect-gfx">
                  {" "}
                  <img src="/gfx/donts-a.png" alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">Avoid Close Contact</h5>
                </div>
              </div>
              <div className={["protect-item negative"].join(" ")}>
                <div className="protect-gfx">
                  {" "}
                  <img src="/gfx/donts-b.png" alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">Don’t Touch Face</h5>
                </div>
              </div>
              <div className={["protect-item negative"].join(" ")}>
                <div className="protect-gfx">
                  {" "}
                  <img src="/gfx/donts-c.png" alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">Social Distancing</h5>
                </div>
              </div>
            </div>
            <div
              className={[
                "col-6 col-mb-5 col-sm-6 col-lg-4 col-xl-3 flex-grow-1 ",
              ].join(" ")}
            >
              <div className={["protect-item positive"].join(" ")}>
                <div className="protect-gfx">
                  {" "}
                  <img src="/gfx/dos-a.png" alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">Wash Your Hands</h5>
                </div>
              </div>
              <div className={["protect-item positive"].join(" ")}>
                <div className="protect-gfx">
                  {" "}
                  <img src="/gfx/dos-b.png" alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">Drink Much Watar</h5>
                </div>
              </div>
              <div className={["protect-item positive"].join(" ")}>
                <div className="protect-gfx">
                  {" "}
                  <img src="/gfx/dos-c.png" alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">Use Face Mask</h5>
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

export default connect(mapStateToProps)(section_8);

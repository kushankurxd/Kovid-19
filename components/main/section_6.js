import { connect } from "react-redux";

const section_6 = (props) => {
  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-dark tc-light section-handwash"
          : "section section-l bg-light section-handwash"
      }
      id="handwash"
    >
      <div className={["container mt-n4"].join(" ")}>
        <div className={["section-subhead text-center"].join(" ")}>
          <h4 className="title">
            Follow steps to <br className="d-sm-none" /> wash hands
          </h4>
          <a
            href="#faq"
            className={["btn btn-sm btn-transparent scrollto"].join(" ")}
          >
            <span>Why do I need wash hand</span>
            <em className={["icon ni ni-arrow-long-right"].join(" ")}></em>
          </a>
        </div>
        <div className="section-content">
          <div className={["row g-gs justify-content-center"].join(" ")}>
            <div className={["col-6 col-mb-5 col-sm-4 col-lg-2"].join(" ")}>
              <div className="box4">
                <div className="box4-gfx">
                  {" "}
                  <img src="/gfx/hand-a.png" alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Soap on Hand</h6>
                </div>
              </div>
            </div>
            <div className={["col-6 col-mb-5 col-sm-4 col-lg-2"].join(" ")}>
              <div className="box4">
                <div className="box4-gfx">
                  {" "}
                  <img src="/gfx/hand-b.png" alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Palm to Palm</h6>
                </div>
              </div>
            </div>
            <div className={["col-6 col-mb-5 col-sm-4 col-lg-2"].join(" ")}>
              <div className="box4">
                <div className="box4-gfx">
                  {" "}
                  <img src="/gfx/hand-c.png" alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Between Fingers</h6>
                </div>
              </div>
            </div>
            <div className={["col-6 col-mb-5 col-sm-4 col-lg-2"].join(" ")}>
              <div className="box4">
                <div className="box4-gfx">
                  {" "}
                  <img src="/gfx/hand-d.png" alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Back to Hands</h6>
                </div>
              </div>
            </div>
            <div className={["col-6 col-mb-5 col-sm-4 col-lg-2"].join(" ")}>
              <div className="box4">
                <div className="box4-gfx">
                  {" "}
                  <img src="/gfx/hand-e.png" alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Clean with Water</h6>
                </div>
              </div>
            </div>
            <div className={["col-6 col-mb-5 col-sm-4 col-lg-2"].join(" ")}>
              <div className="box4">
                <div className="box4-gfx">
                  {" "}
                  <img src="/gfx/hand-f.png" alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Focus on Wrist</h6>
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

export default connect(mapStateToProps)(section_6);

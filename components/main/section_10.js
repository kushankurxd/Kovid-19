import { connect } from "react-redux";

const section_10 = (props) => {
  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-dark tc-light section-blog"
          : "section section-l bg-light section-blog"
      }
      id="news"
    >
      <div className="container">
        <div className="section-head text-center wide-lg">
          <h5 className="subtitle">Recent From Blog</h5>
          <h2 className="title">Latest Update</h2>
        </div>
        <div className="section-content">
          <div className="row g-gs justify-content-center">
            <div className="col-md-9 col-lg-4">
              <div
                className={props.darkTheme ? "blog-item bg-dark" : "blog-item"}
              >
                <div className="blog-image">
                  {" "}
                  <img src="/blog/blog-a.jpg" alt="" />
                </div>
                <div className="blog-text">
                  <h5 className="title">
                    <a href="#news">Caring for someone at home</a>
                  </h5>
                  <p>
                    Most people who get sick with COVID-19 will have only mild
                    illness and should recover at home. Care at home can help
                    stop the spread of COVID-19
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-lg-4">
              <div
                className={props.darkTheme ? "blog-item bg-dark" : "blog-item"}
              >
                <div className="blog-image">
                  {" "}
                  <img src="/blog/blog-b.jpg" alt="" />
                </div>
                <div className="blog-text">
                  <h5 className="title">
                    <a href="#news">15 ways to keep safe and healthy</a>
                  </h5>
                  <p>
                    Most people who get sick with COVID-19 will have only mild
                    illness and should recover at home. Care at home can help
                    stop the spread of COVID-19
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-lg-4">
              <div
                className={props.darkTheme ? "blog-item bg-dark" : "blog-item"}
              >
                <div className="blog-image">
                  {" "}
                  <img src="/blog/blog-c.jpg" alt="" />
                </div>
                <div className="blog-text">
                  <h5 className="title">
                    <a href="#news">If You Think You Are Sick</a>
                  </h5>
                  <p>
                    If you are sick with COVID-19 or think you might have it,
                    follow the steps below to help protect other people in your
                    home and community
                  </p>
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

export default connect(mapStateToProps)(section_10);

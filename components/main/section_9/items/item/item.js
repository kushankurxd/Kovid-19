import { useState, useEffect } from "react";
import { connect } from "react-redux";

const item = (props) => {
  const [openSection, setOpenSection] = useState(false);

  const clickHandler = () => {
    setOpenSection((prevState) => !prevState);
  };

  useEffect(() => {
    setOpenSection(false);
  }, [props]);

  return (
    <div
      className={props.darkTheme ? "accordion-item dark" : "accordion-item"}
      onClick={clickHandler}
    >
      <h5
        className={
          openSection
            ? "accordion-title"
            : props.darkTheme
            ? "accordion-title collapsed dark"
            : "accordion-title collapsed"
        }
      >
        {props.title}{" "}
        <span
          className={props.darkTheme ? "accordion-icon dark" : "accordion-icon"}
        ></span>
      </h5>
      <div className={openSection ? "collapse show" : "collapse"}>
        <div className="accordion-content">{props.body}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkTheme: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(item);

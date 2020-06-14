import Navbar from "../components/header/navbar";
import Home from "../components/header/home";
import { connect } from "react-redux";

const header = (props) => {
  return (
    <header
      className={
        props.darkTheme
          ? "nk-header bg-dark tc-light has-overlay"
          : "nk-header bg-light has-overlay"
      }
      id="home"
    >
      <div className={["overlay shape shape-a"].join(" ")}></div>
      <Navbar />
      <Home />
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    darkTheme: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(header);

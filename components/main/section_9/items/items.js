import Item from "./item/item";
import { connect } from "react-redux";

const items = (props) => {
  const list = props.sections.map((item, index) => (
    <Item key={index} title={item.title} body={item.body} />
  ));
  return (
    <div className="tab-pane fade show active">
      <div className={props.darkTheme ? "accordion dark" : "accordion"}>
        {list}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkTheme: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(items);

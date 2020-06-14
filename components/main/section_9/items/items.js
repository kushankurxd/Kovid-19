import Item from "./item/item";

const items = (props) => {
  const list = props.sections.map((item, index) => (
    <Item key={index} title={item.title} body={item.body} />
  ));
  return (
    <div className="tab-pane fade show active">
      <div className="accordion">{list}</div>
    </div>
  );
};

export default items;

const tab = (props) => {
  return (
    <li className="nav-item" onClick={props.clicked}>
      {" "}
      <a
        className={props.selected ? ["nav-link active"].join(" ") : "nav-link"}
        data-toggle="tab"
        href="#faq"
      >
        {props.title}
      </a>
    </li>
  );
};

export default tab;

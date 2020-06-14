import { useState, useEffect } from "react";

const item = (props) => {
  const [openSection, setOpenSection] = useState(false);

  const clickHandler = () => {
    setOpenSection((prevState) => !prevState);
  };

  useEffect(() => {
    setOpenSection(false);
  }, [props]);

  return (
    <div className="accordion-item" onClick={clickHandler}>
      <h5
        className={
          openSection ? "accordion-title" : "accordion-title collapsed"
        }
      >
        {props.title} <span className="accordion-icon"></span>
      </h5>
      <div className={openSection ? "collapse show" : "collapse"}>
        <div className="accordion-content">{props.body}</div>
      </div>
    </div>
  );
};

export default item;

import React from "react";

import "./new.style.sass";

export function New(props) {
  const { name, title, description, image_link, promocode } = props;
  return (
    <div className="new">
      <div className="new__header">
        <div className="new__logo">{image_link}</div>
        <div className="new__title">{title}</div>
      </div>
      <div className="new__description">{description}</div>
      <div className="new__footer">
        <div className="new__date">{promocode}</div>
      </div>
    </div>
  );
}

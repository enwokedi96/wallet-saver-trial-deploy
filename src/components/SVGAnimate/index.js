import React from "react";

const SVGAnimate = ({children, id, anim }) => {
    return <div className={"svg-" + id } data-animate={ anim }>{children}</div>;
  };

export default SVGAnimate;
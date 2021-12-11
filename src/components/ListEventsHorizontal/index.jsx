import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import ScrollContainer from "react-indiana-drag-scroll";
import EventBox from "../EventBox";

ListEventsHorizontal.propTypes = {};

function ListEventsHorizontal(props) {
  const { data } = props;
  const scrollRef = React.createRef();
  const [positionScroll, setPositionScroll] = useState(0);

  onscroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const scrollWidth = scrollRef.current.container.current.scrollWidth;
    const offsetWidth = scrollRef.current.container.current.offsetWidth;
    const positionScroll = scrollLeft / (scrollWidth - offsetWidth);
    setPositionScroll(positionScroll * 100);
  };
  return (
    <div className="list-events-horizontal">
      <ScrollContainer
        ref={scrollRef}
        onScroll={onscroll}
        className="scroll-horizontal"
      >
        {data &&
          data.map((item, index) => {
            return <EventBox data={item} key={index} />;
          })}
      </ScrollContainer>
      <div
        className="position-scroll-bar"
        style={{
          backgroundSize: positionScroll + "%",
        }}
      ></div>
    </div>
  );
}

export default ListEventsHorizontal;

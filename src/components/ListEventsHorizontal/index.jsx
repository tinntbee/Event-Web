import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";
import ScrollContainer from "react-indiana-drag-scroll";
import EventBox from "../EventBox";
import EventBoxLoading from "../EventBox/EventBoxLoading";

ListEventsHorizontal.propTypes = {};

function ListEventsHorizontal(props) {
  const { data, loading } = props;
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
        {data?.length == 0 && !loading && (
          <p>
            {"Bạn chưa đăng kí sự kiện nào cả :(( "}<br/>
            <Link to="/home">Đi đến trang chủ</Link>
          </p>
        )}
        {loading && <EventBoxLoading />}
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

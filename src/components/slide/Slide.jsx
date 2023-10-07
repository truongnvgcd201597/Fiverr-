import Slider from "infinite-react-carousel";
import "./slide.scss";

const Slide = ({ children, slidesToShow, arrowScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider dots slidesToShow={slidesToShow} arrowScroll={arrowScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;

import React from "react";
import Slider from "react-slick";
import Art from "./art.jpg";
import Basket from "./basket.jpg";
import Urban from "./urban.jpg";
import "./Image.css";
class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " This is Image"
    };
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider className="Image" {...settings}>
        <div>
          <img src={Art} width="100%" height="500" />
        </div>
        <div>
          <img src={Basket} width="100%" height="500" />
        </div>
        <div>
          <img src={Urban} width="100%" height="500" />
        </div>
      </Slider>
    );
  }
}
export default Image;

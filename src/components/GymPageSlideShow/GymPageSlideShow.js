import React, { Component } from "react";
import "./GymPageSlideShow.css";

export default class GymPageSlideShow extends Component {
  constructor(props) {
    super(props);
    const { gym } = props;
    const { images } = gym;
    const imgsArray = images.img_urls;

    this.state = {
      slideIndex: 0,
      Slides: imgsArray,
      currentSlide: 0,
    };
  }

  plusSlides(n) {
    const { slideIndex, Slides } = this.state;
    const newSlideIndex = slideIndex + n;

    if (newSlideIndex < 0) {
      this.setState({ slideIndex: Slides.length - 1 });
    } else if (newSlideIndex > Slides.length - 1) {
      this.setState({ slideIndex: 0 });
    } else {
      this.setState({ slideIndex: newSlideIndex });
    }
  }

  render() {
    const { slideIndex, Slides } = this.state;

    const slideShowDots = Slides.map((slide, index) => (
      <span
        className="dot"
        key={index}
        onClick={() => this.plusSlides(1)}
      ></span>
    ));

    return (
      <>
        {" "}
        <>
          <div className="gympage-slideshow-container" id={this.props.key}>
            <div className="mySlides fade">
              <div className="numbertext">
                {slideIndex + 1} / {Slides.length}
              </div>
              <div className="gympage-slideShow-image-container">
                <img
                  className="gympage-slideShow-image"
                  alt="Listed Gym"
                  src={Slides[slideIndex]}
                />
              </div>
            </div>
            <a className="prev" onClick={() => this.plusSlides(-1)}>
              &#10094;
            </a>
            <a className="next" onClick={() => this.plusSlides(1)}>
              &#10095;
            </a>
          </div>
          <div>{slideShowDots}</div>
        </>
      </>
    );
  }
}

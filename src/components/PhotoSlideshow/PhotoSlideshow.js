import React, { Component } from "react";
import "./PhotoSlideshow.css";
import { render } from "@testing-library/react";

export default class PhotoSlideshow extends Component {
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
    console.log(Slides);

    const slideShowDots = Slides.map((slide) => (
      <span className="dot" onClick={() => this.plusSlides(1)}></span>
    ));

    return (
      <>
        {" "}
        <>
          <div>
            <div class="slideshow-container" id={this.props.key}>
              <div className="mySlides fade">
                <div className="numbertext">
                  {slideIndex + 1} / {Slides.length}
                </div>
                <div className="slideShow-image-container">
                  <img className="slideShow-image" src={Slides[slideIndex]} />
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
          </div>
        </>
      </>
    );
  }
}

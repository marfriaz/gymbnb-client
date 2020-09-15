import React, { Component } from "react";
import "./PhotoSlideshow.css";

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

// function GymPhotos(slides) {
//   console.log(slides);
//   const slidesArray = slides.map((slide) => (
//     <span
//       // className="dot"
//       className={slide}
//       onClick={() => this.plusSlides(1)}
//     ></span>
//   ));
//   return slidesArray;
// }

//////////////////////////////

// function GymPhotos({ gym }) {
//   const {
//     img_url_one,
//     img_url_two,
//     img_url_three,
//     img_url_four,
//     img_url_five,
//   } = gym;
//   const imgsArray = [
//     img_url_one,
//     img_url_two,
//     img_url_three,
//     img_url_four,
//     img_url_five,
//   ];
//   const gymGalleryArray = imgsArray.filter((gymImg) => gymImg !== null);
//   // this.setState({ StateSlides: gymGalleryArray.length });
//   const gymGallery = gymGalleryArray.map((gymImg, i) => (
//     <div className="mySlides fade">
//       <div className="numbertext">
//         {i + 1} / {gymGalleryArray.length}
//       </div>
//       <img src={gymImg} />
//       <div className="text">Caption Text</div>
//     </div>
//   ));
//   return (
//     <>
//       <div class="slideshow-container">
//         {gymGallery}
//         {/* <a class="prev" onclick={plusSlides(-1)}>
//           &#10094;
//         </a>
//         <a class="next" onclick={plusSlides(1)}>
//           &#10095;
//         </a> */}
//         {/* </div>
//       <div style="text-align:center">
//         <span className="dot" onclick={currentSlide(1)}></span>
//         <span className="dot" onclick={currentSlide(2)}></span>
//         <span className="dot" onclick={currentSlide(3)}></span> */}
//       </div>
//     </>
//   );
// }

// // var slideIndex = 1;
// // showSlides(slideIndex);

// // function plusSlides(n) {
// //   var slideIndex = 1;
// //   showSlides((slideIndex += n));
// // }

// // function currentSlide(n) {
// //   var slideIndex = 1;
// //   showSlides((slideIndex = n));
// // }

// // function showSlides(n) {
// //   var i;
// //   var slides = document.getElementsByClassName("mySlides");
// //   var dots = document.getElementsByClassName("dot");
// //   if (n > slides.length) {
// //     slideIndex = 1;
// //   }
// //   if (n < 1) {
// //     slideIndex = slides.length;
// //   }
// //   for (i = 0; i < slides.length; i++) {
// //     slides[i].style.display = "none";
// //   }
// //   for (i = 0; i < dots.length; i++) {
// //     dots[i].className = dots[i].className.replace(" active", "");
// //   }
// //   console.log(slides.length);
// //   // slides[slideIndex - 1].style.display = "block";
// //   // dots[slideIndex - 1].className += " active";
// // }

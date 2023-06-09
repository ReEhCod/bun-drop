import React from "react";
import { RenderImgManager } from "../services/RenderImgService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
function RenderImg() {
  const {
    currentIndex,
    isRunning,
    images,
    previousImage,
    nextImage,
    handleToggle,
  } = RenderImgManager.Carousel();

  return (
    <div>
      <div className="loop-container">
        <img
          src={images[currentIndex].url}
          alt="Carousel"
          className="carousel-image"
        />
        <div className="loop-info-card">
          <div className="info-text">
            <p>{images[currentIndex].title}</p>
            <p>{images[currentIndex].text}</p>
          </div>

          <div className="btn-container">
            <button onClick={previousImage} className="carousel-btn">
              <FontAwesomeIcon icon={faBackwardStep} />{" "}
            </button>
            <button onClick={nextImage} className="carousel-btn">
              <FontAwesomeIcon icon={faForwardStep} />{" "}
            </button>
            <div className="carousel-btn">|</div>
            <button onClick={handleToggle} className="carousel-btn">
              {isRunning ? (
                <FontAwesomeIcon icon={faPause} />
              ) : (
                <FontAwesomeIcon icon={faCirclePlay} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderImg;

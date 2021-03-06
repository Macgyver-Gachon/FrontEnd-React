import "./recommend.css";
import "../style.css";
import Navi from "../components/Navi";
import React, { useEffect, useRef, useState } from "react";
import RecommendTitle from "./recommendTitle";
import CampingContent from "../campingContent";
import campingItems from "../mock/rcMock.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BottomPage from "../components/bottomPage.";
import styled from "styled-components";

const Recommend = () => {
  const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
  `;
  const Button = styled.button`
    margin: 0 20px;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    &:hover {
      transition: all 0.3s ease-in-out;
      opacity: 70%;
    }
  `;
  const SliderContainer = styled.div`
    margin: 0 40px;
    width: 100%;
    display: flex; //이미지들을 가로로 나열합니다.
  `;
  const TOTAL_SLIDES = 2;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.2s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <>
      <Navi />
      <div className="rcBlock">
        <div>
          <Link to="/checkList">
            <p>
              나의 캠핑 취향을 고르러
              <FontAwesomeIcon
                icon={faArrowRightToBracket}
                className="arrow"
                style={{ marginLeft: "10px" }}
              />
            </p>
          </Link>
        </div>
      </div>
      <RecommendTitle />
      <Container>
        <SliderContainer ref={slideRef}>
          <CampingContent items={campingItems} />
        </SliderContainer>
        <div className="slideButtonBlock">
          <Button onClick={prevSlide} className="slideButton">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <p className="slideText">Page {currentSlide + 1}</p>
          <Button onClick={nextSlide} className="slideButton">
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      </Container>
      <BottomPage />
    </>
  );
};

export default Recommend;

// import styles from "./Card.module.css";
import styled from "styled-components";
import girlsArray from "../data/girls";
import { useState } from "react";
import { getVal, setVal } from "../utils/helpers";
import K from "../utils/constants.js";

const side = Math.sqrt(girlsArray.length);
const spacing = 2;

//TODO: try to use CSS math functions as calc(), max() o rmin() to calculate responsive design
const Square = styled.div`
  box-shadow: 2px 2px 3px grey;
  border: 2px solid black;
  border-radius: 10px;
  background-image: ${(props) =>
    props.isTurned
      ? `url(${props.image})`
      : `url(${require(`../images/cover.jpeg`)})`};
  background-size: cover;
  margin: 6vh 55vh;
  width: ${(props) => props.size}vh;
  position: absolute;
  height: ${(props) => props.size}vh;
  left: ${(props) => (props.index % side) * (props.size + spacing)}vh;
  top: ${(props) => Math.floor(props.index / side) * (props.size + spacing)}vh;
  transition: all ${K.CARD_FLIP_DURATION}s ease-in-out;
  transform: ${(props) => (props.isTurned ? "rotateY(180deg)" : "")};
  display: ${(props) => (props.visible ? "block" : "none")};
  animation: ${(props) => (props.hide ? "hideCard" : "")};
  animation-duration: ${K.CARD_REMOVE_DURATION}s;
  animation-timing-function: cubic-bezier();

  @keyframes hideCard {
    0% {
      transform: rotateY(0deg);
    }
    20% {
      transform: rotateY(180deg);
    }
    50% {
      transform: scale(120%) rotate(0deg);
    }
    75% {
      transform: scale(60%) rotate(180deg);
    }
    100% {
      transform: scale(0%) rotate(360deg);
    }
  }

  :hover_hack {
    transition: ${(props) => (props.isTurned ? "none" : "all 0s ease-in-out")};
    transform: ${(props) => (props.hide ? "" : "rotateY(180deg)")};
    background-image: url(${(props) => props.image});
    background-size: cover;
  }
`;

const Card = (props) => {
  const [isTurned, setIsTurned] = useState(false);
  const [hide, setHide] = useState(false);

  const flipBack = (ms) => {
    setTimeout(() => {
      setIsTurned(false);
      setVal(K.CLICK_COUNT, 0);
    }, ms);
  };

  const removeCard = (id) => {
    setHide(true);

    setTimeout(() => {
      girlsArray[id].visible = false;
      props.refreshCards();
      setVal(K.CLICK_COUNT, 0);
    }, K.CARD_REMOVE_DURATION * 1000);
  };

  const clickHandler = (id) => {
    let clicks = getVal(K.CLICK_COUNT) * 1;

    switch (clicks) {
      case 0:
        setVal(K.FIRST_CARD, props.id);
        setVal(K.FIRST_CARD_IDX, props.index);
        setVal(K.CLICK_COUNT, 1);
        setIsTurned(true);
        flipBack(K.CARD_FLIP_BACK_DURATION * 1000);
        break;
      case 1:
        setVal(K.SECOND_CARD, props.id);
        setVal(K.CLICK_COUNT, 2);
        setIsTurned(true);

        let firstCard = getVal(K.FIRST_CARD);
        let firstCardIdx = getVal(K.FIRST_CARD_IDX);
        let secondCard = getVal(K.SECOND_CARD);
        if (firstCard === secondCard && props.index !== firstCardIdx) {
          // playSound();
          removeCard(props.index);
        } else {
          flipBack(1000);
        }
        break;
      default:
        break;
    }
  };

  return (
    <Square
      hide={hide}
      visible={props.visible}
      isTurned={isTurned}
      image={props.image}
      index={props.index}
      id={props.id}
      size={20}
      onClick={() => clickHandler(props.index)}
    ></Square>
  );
};

export default Card;

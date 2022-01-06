import styles from "./Grid.module.css";
import Card from "./Card";
import girlsArray from "../data/girls.js";
import { useState } from "react";
import styled from "styled-components";
import K from "../utils/constants";

const ShowWinningText = styled.div`
  font-size: 58px;
  color: white;
  font-weight: bold;
  opacity: 0;
  text-shadow: 3px 3px 5px black;
  animation: ${(props) =>
    props.show ? `anim ${K.WIN_ANIMAITON_DURATION}s ease-in-out 0s` : ""};

  @keyframes anim {
    0% {
      opacity: 0;
      transform: scale(1);
    }
    30% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      transform: scale(100);
    }
  }
`;

const Grid = (props) => {
  const [refreshId, setRefreshId] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const removeHandler = () => {
    setRefreshId(Math.random());
    console.log(refreshId);
    if (checkGameClean()) {
      setIsGameOver(true);
      setTimeout(() => {
        setIsGameOver(false);
      }, K.WIN_ANIMAITON_DURATION * 1000);
      props.resetGame();
    }
  };

  const checkGameClean = () => {
    if (girlsArray.filter((i) => i.visible === true).length > 0) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className={styles.container}>
      {girlsArray.map((g, index) => (
        <Card
          refreshCards={removeHandler}
          key={index}
          image={"../images/" + g.image}
          index={index}
          id={g.id}
          isTurned={false}
          visible={g.visible}
        />
      ))}
      <ShowWinningText show={isGameOver}>YOU WON!</ShowWinningText>
    </div>
  );
};

export default Grid;

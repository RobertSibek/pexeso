import Grid from "../components/Grid";
import "./HomeScreen.css";

const HomeScreen = (props) => {
  const backgrounds = [
    "background1",
    "background2",
    "background3",
    "background4",
  ];

  const callResetGame = () => {
    props.resetGame();
  };

  return (
    <div className={"container " + backgrounds[props.bgId]}>
      <Grid resetGame={callResetGame} />
    </div>
  );
};

export default HomeScreen;

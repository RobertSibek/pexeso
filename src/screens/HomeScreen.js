import Grid from "../components/Grid";
import "./HomeScreen.css";

const HomeScreen = (props) => {
  const callResetGame = () => {
    props.resetGame();
  };
  return (
    <div className="container">
      <Grid resetGame={callResetGame} />
    </div>
  );
};

export default HomeScreen;

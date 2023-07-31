import "./App.scss";
import { MainPage } from "./components/Main-page/Main-page";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { useState } from "react";
import { Win } from "./components/Win";

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [win, setWin] = useState(false);

  function addScore() {
    setCurrentScore((x) => x + 1);
    if (bestScore <= currentScore) {
      setBestScore((bestScore) => bestScore + 1);
    }

    if (bestScore === 10) setWin(true);
  }

  function restartScore() {
    setCurrentScore(0);
  }

  function gameRestart() {
    setCurrentScore(0);
    setBestScore(0);
    setWin(false);
  }

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />
      {win ? (
        <Win gameRestart={gameRestart} />
      ) : (
        <MainPage addScore={addScore} restartScore={restartScore} />
      )}

      <Footer />
    </>
  );
}

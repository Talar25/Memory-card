import "./App.scss";
import { MainPage } from "./components/Main-page/Main-page";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { useState } from "react";
import { Win } from "./components/Win";
import { Start } from "./components/Start";
import uniqid from "uniqid";

const characters1 = [
  {
    id: uniqid(),
    name: "Rex",
    src: "https://media2.giphy.com/media/Y42OeCcJI4ufXDQ3oA/giphy.gif?cid=b199b7c0tpdn5u5x6p1ga1011gyyxw4j9q2nimr04s46m0zn&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    id: uniqid(),
    name: "Alfie",
    src: "https://media3.giphy.com/media/1LweXxLwVT0J2/giphy.gif?cid=b199b7c0h0qg3uhvmcsp6y7n1bwunyl0ca5d8jbsl0a4vr6c&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    id: uniqid(),
    name: "Max",
    src: "https://media0.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.gif?cid=b199b7c08d3docq88fdz9nb0b6tp926439osnb6bwjsostx2&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    id: uniqid(),
    name: "Bella",
    src: "https://media0.giphy.com/media/DvyLQztQwmyAM/giphy.gif?cid=b199b7c0er638yh5gsuv4q1yu1xjahu8h4b8zwi15g1tykdr&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
];

const characters2 = [
  {
    id: uniqid(),
    name: "Alfie",
    src: "https://media3.giphy.com/media/1LweXxLwVT0J2/giphy.gif?cid=b199b7c0h0qg3uhvmcsp6y7n1bwunyl0ca5d8jbsl0a4vr6c&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    id: uniqid(),
    name: "Bella",
    src: "https://media0.giphy.com/media/DvyLQztQwmyAM/giphy.gif?cid=b199b7c0er638yh5gsuv4q1yu1xjahu8h4b8zwi15g1tykdr&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    id: uniqid(),
    name: "Pork Pie",
    src: "https://media4.giphy.com/media/cuPm4p4pClZVC/giphy.gif?cid=b199b7c0wx1qu1b1afbfd5kv1bqeikj77u9d0atr3npdxlta&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    id: uniqid(),
    name: "Salem",
    src: "https://media1.giphy.com/media/tESfFtsS3sGCk/giphy.gif?cid=b199b7c07ujdidh612olh7ppgs7xlgc7rf39mo33wvfdw3zr&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    id: uniqid(),
    name: "Ziggy",
    src: "https://media1.giphy.com/media/g4OAnFSD83EOCvahc8/giphy.gif?cid=b199b7c0kszqjjqls331e1x4osp80t11gmo1dx1mwy8tcamx&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    id: uniqid(),
    name: "Simba",
    src: "https://media0.giphy.com/media/AiTAxk2kavgpa/giphy.gif?cid=b199b7c0bpx15ymtezlifwydjwp55nvzn7pp85m2r9qtqmrp&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
];

const characters3 = [
  {
    id: uniqid(),
    name: "Nessie",
    src: "https://media1.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=b199b7c0zs5r7waxyjs0efgvefsa8d9ouinnlrkm9bufsigf&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    id: uniqid(),
    name: "Pork Pie",
    src: "https://media4.giphy.com/media/cuPm4p4pClZVC/giphy.gif?cid=b199b7c0wx1qu1b1afbfd5kv1bqeikj77u9d0atr3npdxlta&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    id: uniqid(),
    name: "Hunky-dory",
    src: "https://media2.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif?cid=b199b7c0aobvidfgc43gw77md06cz43czat86frnlb1c2jhw&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    id: uniqid(),
    name: "Salem",
    src: "https://media1.giphy.com/media/tESfFtsS3sGCk/giphy.gif?cid=b199b7c07ujdidh612olh7ppgs7xlgc7rf39mo33wvfdw3zr&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    id: uniqid(),
    name: "Scrummy",
    src: "https://media1.giphy.com/media/ASvQ3A2Q7blzq/giphy.gif?cid=b199b7c0e0hpz8cl0pikz6uwtbyo1cdci0co1wix557s0cf2&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    id: uniqid(),
    name: "Squib",
    src: "https://media0.giphy.com/media/26u4mDCnwqZJEmp8Y/giphy.gif?cid=b199b7c0ab8n4zqspdtxpiw3j9guqzqqlpuwu9uc4a1pf6xy&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    id: uniqid(),
    name: "Telly",
    src: "https://media3.giphy.com/media/UShc4aaLlMTYI/giphy.gif?cid=b199b7c00tztjx0edv3dh0zi718na12s2amhroodt4mccyl2&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    id: uniqid(),
    name: "Ziggy",
    src: "https://media1.giphy.com/media/g4OAnFSD83EOCvahc8/giphy.gif?cid=b199b7c0kszqjjqls331e1x4osp80t11gmo1dx1mwy8tcamx&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    id: uniqid(),
    name: "Simba",
    src: "https://media0.giphy.com/media/AiTAxk2kavgpa/giphy.gif?cid=b199b7c0bpx15ymtezlifwydjwp55nvzn7pp85m2r9qtqmrp&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    id: uniqid(),
    name: "Jasper",
    src: "https://media3.giphy.com/media/U4hBuiqZmPjNK/giphy.gif?cid=b199b7c0ee7ukdk25of2xwlmgtlj6x2svsc34rm6qhqrr6db&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
];

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [win, setWin] = useState(false);
  const [game, setGame] = useState(false);
  const [medium, setMedium] = useState(false);
  const [hard, setHard] = useState(false);

  const whichGame = medium ? characters2 : hard ? characters3 : characters1;

  const winningPoints = whichGame.length;
  console.log(winningPoints);

  function addScore() {
    setCurrentScore((x) => x + 1);
    if (bestScore <= currentScore) {
      setBestScore((bestScore) => bestScore + 1);
    }
  }

  function checkWin() {
    if (bestScore === winningPoints) {
      setWin(true);
    }
  }

  function restartScore() {
    setCurrentScore(0);
  }

  function gameRestart() {
    setCurrentScore(0);
    setBestScore(0);
    setWin(false);
    setGame(false);
  }

  return (
    <>
      {game ? (
        <>
          <Header
            currentScore={currentScore}
            bestScore={bestScore}
            gameRestart={gameRestart}
          />
          {win ? (
            <Win gameRestart={gameRestart} />
          ) : (
            <MainPage
              addScore={addScore}
              restartScore={restartScore}
              checkWin={checkWin}
              characters={whichGame}
            />
          )}
        </>
      ) : (
        <Start setMedium={setMedium} setHard={setHard} setGame={setGame} />
      )}

      <Footer />
    </>
  );
}

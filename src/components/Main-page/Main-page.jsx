/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Main-page.scss";

const characters = [
  {
    name: "Nessie",
    src: "https://media1.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=b199b7c0zs5r7waxyjs0efgvefsa8d9ouinnlrkm9bufsigf&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    name: "Pork Pie",
    src: "https://media4.giphy.com/media/cuPm4p4pClZVC/giphy.gif?cid=b199b7c0wx1qu1b1afbfd5kv1bqeikj77u9d0atr3npdxlta&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    name: "Hunky-dory",
    src: "https://media2.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif?cid=b199b7c0aobvidfgc43gw77md06cz43czat86frnlb1c2jhw&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    name: "Salem",
    src: "https://media1.giphy.com/media/tESfFtsS3sGCk/giphy.gif?cid=b199b7c07ujdidh612olh7ppgs7xlgc7rf39mo33wvfdw3zr&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    name: "Scrummy",
    src: "https://media1.giphy.com/media/ASvQ3A2Q7blzq/giphy.gif?cid=b199b7c0e0hpz8cl0pikz6uwtbyo1cdci0co1wix557s0cf2&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    name: "Squib",
    src: "https://media0.giphy.com/media/26u4mDCnwqZJEmp8Y/giphy.gif?cid=b199b7c0ab8n4zqspdtxpiw3j9guqzqqlpuwu9uc4a1pf6xy&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    name: "Telly",
    src: "https://media3.giphy.com/media/UShc4aaLlMTYI/giphy.gif?cid=b199b7c00tztjx0edv3dh0zi718na12s2amhroodt4mccyl2&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    name: "Ziggy",
    src: "https://media1.giphy.com/media/g4OAnFSD83EOCvahc8/giphy.gif?cid=b199b7c0kszqjjqls331e1x4osp80t11gmo1dx1mwy8tcamx&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    name: "Simba",
    src: "https://media0.giphy.com/media/AiTAxk2kavgpa/giphy.gif?cid=b199b7c0bpx15ymtezlifwydjwp55nvzn7pp85m2r9qtqmrp&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
  {
    name: "Jasper",
    src: "https://media3.giphy.com/media/U4hBuiqZmPjNK/giphy.gif?cid=b199b7c0ee7ukdk25of2xwlmgtlj6x2svsc34rm6qhqrr6db&ep=v1_gifs_translate&rid=giphy.gif&ct=g",
    clicked: false,
  },
];

export function MainPage({ addScore, restartScore }) {
  const [cards, setCards] = useState(characters);
  const [isLoading, setLoading] = useState(true);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  useEffect(function () {
    setTimeout(() => setLoading(false), 1000);
    setCards((cards) => shuffleArray(cards));
  }, []);

  function changeClicked(id) {
    const cat = cards.find((card, i) => i === id);
    if (cat.clicked === false) {
      setCards((cards) =>
        cards.map((card, i) => (i === id ? { ...card, clicked: true } : card))
      );
      setCards((cards) => shuffleArray(cards));
      addScore();
    } else {
      setCards(characters);
      restartScore();
    }
  }

  return (
    <main className="main">
      {isLoading ? (
        <Loader />
      ) : (
        cards.map((card, i) => (
          <Card
            cards={cards}
            key={i}
            url={card.src}
            handleClick={changeClicked}
            id={i}
          >
            {card.name}
          </Card>
        ))
      )}
    </main>
  );
}

// eslint-disable-next-line react/prop-types
function Card({ children, url, handleClick, id }) {
  // const url = data.forms.url;
  return (
    <div className="main__card" onClick={() => handleClick(id)}>
      <img src={url} />
      <p className="main__card-name">{children}</p>
    </div>
  );
}

function Loader() {
  return <p className="main__loader">Loading...</p>;
}

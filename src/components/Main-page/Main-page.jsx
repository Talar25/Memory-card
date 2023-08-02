/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Main-page.scss";

export function MainPage({ addScore, restartScore, checkWin, characters }) {
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

  useEffect(
    function () {
      setTimeout(() => setLoading(false), 1000);
      setCards((cards) => shuffleArray(cards));

      checkWin();
    },
    [setCards, checkWin]
  );

  function changeClicked(id) {
    const animal = cards.find((card, i) => card.id === id);
    if (animal.clicked === false) {
      const newArr = cards.map((card) =>
        card.id === id ? { ...card, clicked: true } : card
      );

      setCards(shuffleArray(newArr));
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
          <Card key={i} url={card.src} handleClick={changeClicked} id={card.id}>
            {card.name}
          </Card>
        ))
      )}
    </main>
  );
}

// eslint-disable-next-line react/prop-types
function Card({ children, url, handleClick, id }) {
  const [didLoad, setLoad] = useState(false);
  // const url = data.forms.url;
  function handleLoading() {
    setLoad(true);
  }

  const style = didLoad ? {} : { visibility: "hidden" };

  return (
    <div style={style} className="main__card" onClick={() => handleClick(id)}>
      <img src={url} onLoad={handleLoading} />
      <p className="main__card-name">{children}</p>
    </div>
  );
}

function Loader() {
  return <p className="main__loader">Loading...</p>;
}

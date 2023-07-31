export function Start({ setMedium, setHard, setGame }) {
  function chooseEasy() {
    setMedium(false);
    setHard(false);
    setGame(true);
  }

  function chooseMedium() {
    setMedium(true);
    setGame(true);
  }

  function chooseHard() {
    setHard(true);
    setGame(true);
  }

  return (
    <div className="start">
      <h1 className="heading-primary">Memory Card</h1>
      <div className="start__buttons">
        <button className="start__btn" onClick={chooseEasy}>
          Easy
        </button>
        <button className="start__btn" onClick={chooseMedium}>
          Medium
        </button>
        <button className="start__btn" onClick={chooseHard}>
          Hard
        </button>
      </div>
    </div>
  );
}

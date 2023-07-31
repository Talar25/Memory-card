import "../App.scss";

export function Win({ gameRestart }) {
  return (
    <div className="win-statement">
      <p>U Win the game!!</p>
      <div>
        <button className="win-statement__btn" onClick={gameRestart}>
          Restart
        </button>
      </div>
    </div>
  );
}

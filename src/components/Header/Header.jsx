import "./Header.scss";

export function Header({ currentScore, bestScore, gameRestart }) {
  return (
    <header className="header">
      <div>
        <h1 className="heading-primary" onClick={gameRestart}>
          Memory Card
        </h1>
        <div className="header__score">
          <span>Best score: {bestScore}</span>
          <span>Current score: {currentScore}</span>
        </div>
      </div>
    </header>
  );
}

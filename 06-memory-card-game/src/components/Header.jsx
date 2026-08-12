import styles from "./Header.module.css";

export function Header({ score, moves, resetGame }) {
  return (
    <div className={styles.header}>
      <h2>🎮 Memory card Game</h2>
      <div className={styles.score}>
        <h2>
          Score:<span className={styles.score_value}>{score}</span>
        </h2>
      </div>
      <div className={styles.moves}>
        <h2>
          Moves:<span className={styles.move_number}>{moves}</span>
        </h2>
      </div>
      <div className={styles.new_game}>
        <button className={styles.new_game_button}
        onClick={resetGame}
        >🔁New Game</button>
      </div>
    </div>
  );
}

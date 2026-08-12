import styles from "./GameOver.module.css";

export function GameOver({ score, moves, resetGame }) {
  return(
    <div className={styles.game_over}>
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
    <button className={styles.new_game_button} onClick={resetGame}>
      🔁Play Again🔁
    </button>
  </div>
  )
}

import styles from "./CoinCard.module.css";
import { formatCompactCurrency, formatCurrency } from "../utils/Helpers";
import { Link } from "react-router";
export const CoinCard = ({ coin }) => {
  console.log(coin);
  const quote = coin.quotes?.USD || {};
  const change = quote.percent_change_24h || 0;
  const isPositive = change >= 0;

  return (
    <Link to={`/coin/${coin.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.identity}>
          <div className={styles.icon}>
            <img
              src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
              alt={`${coin.name} logo`}
              className={styles.logo}
            />
          </div>
          <div>
            <h2>{coin.name}</h2>
            <p>{coin.symbol}</p>
          </div>
          <span className={styles.rank}>#{coin.rank || "-"}</span>
        </div>

        <p className={styles.price}>{formatCurrency(quote.price)}</p>

        <span
          className={`${styles.change} ${isPositive ? styles.positive : styles.negative}`}
        >
          {isPositive ? "↑" : "↓"} {Math.abs(change).toFixed(2)}%
        </span>

        <div className={styles.divider} />

        <div className={styles.stats}>
          <div>
            <span>Market cap</span>
            <strong>{formatCompactCurrency(quote.market_cap)}</strong>
          </div>
          <div className={styles.volume}>
            <span>Volume</span>
            <strong>{formatCompactCurrency(quote.volume_24h)}</strong>
          </div>
        </div>
      </div>
    </Link>
  );
};

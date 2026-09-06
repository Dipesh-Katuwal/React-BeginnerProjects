import { useEffect, useState } from "react";
import { fetchCoins } from "../apis/apis";
import styles from "./Home.module.css";
import { Loading } from "../components/Loading";
import { CoinCard } from "../components/CoinCard";

export const Home = () => {
  const [coinsList, setCoinsList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState("grid");
  const [filter, setFilter] = useState("rank");
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    setIsLoading(true);
    async function loadCoins() {
      try {
        const data = await fetchCoins();
        console.log(data);
        setCoinsList(data);
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadCoins();
  }, []);

  let tempList = [...coinsList]
    .sort((coinA, coinB) => {
      switch (filter) {
        case "rank":
          return coinA.rank - coinB.rank;
        case "name":
          return coinA.name
            .toLowerCase()
            .localeCompare(coinB.name.toLowerCase());
        case "price":
          return coinB.quotes.USD.price - coinA.quotes.USD.price;
        case "volume":
          return coinB.quotes.USD.volume_24h - coinA.quotes.USD.volume_24h;
      }
    })
    .filter((coin) => {
      return (
        coin.name.toLowerCase().includes(searchKey.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchKey.toLowerCase())
      );
    });

  return (
    <div className={styles.homediv}>
      <div className={styles.header}>
        <h2>🚀LiveCrypto</h2>
        <p>Real-time cryptocurrencies prices and market data</p>
        <hr />
        <div className={styles.search}>
          <input
            type="search"
            placeholder="search cyptocurrencies..."
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.filter}>
        <label className={styles.filterLabel}>Sort by:</label>
        <select
          className={styles.selection}
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option>rank</option>
          <option>name</option>
          <option>price</option>
          <option>volume</option>
        </select>
      </div>
      <div className={styles.viewControl}>
        <button onClick={() => setView("grid")}>Grid</button>
        <button onClick={() => setView("list")}>List</button>
      </div>
      <div
        className={`${styles.cryptos} ${view === "grid" ? styles.cardGrid : styles.cardList}`}
      >
        {isLoading && <Loading />}
        {tempList.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

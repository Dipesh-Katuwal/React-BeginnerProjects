import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { fetchCoinById, fetchCoinHistory } from "../apis/apis";
import styles from "./CoinDetails.module.css";
import { formatDate } from "../utils/Helpers";
import { Loading } from "../components/Loading";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const detailLinks = [
  ["Website", "website"],
  ["Explorer", "explorer"],
  ["Source code", "source_code"],
  ["Reddit", "reddit"],
  ["Facebook", "facebook"],
  ["YouTube", "youtube"],
];

const valueOrFallback = (value) => value || "Not available";

export const CoinDetails = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState(null);
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCoinDetails() {
      setIsLoading(true);
      setError("");

      try {
        const [coinData, historyData] = await Promise.all([
          fetchCoinById(coinId),
          fetchCoinHistory(coinId),
        ]);

        setCoin(coinData);
        setHistory(
          historyData.map((point) => ({
            date: new Date(point.timestamp).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }),
            price: point.price,
          })),
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadCoinDetails();
  }, [coinId]);

  if (isLoading) {
    return (
      <main className={styles.state}>
        <Loading />
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.state}>
        <p>{error}</p>
        <Link className={styles.backLink} to="/">
          Back to market
        </Link>
      </main>
    );
  }

  if (!coin) return null;

  return (
    <main className={styles.page}>
      <div className={styles.topbar}>
        <Link className={styles.backLink} to="/">
          <span>←</span> Back to market
        </Link>
        <span className={styles.coinId}>{coin.id}</span>
      </div>

      <header className={styles.hero}>
        <div className={styles.logo}>
          <img
            src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
            alt={`${coin.name} logo`}
          />
        </div>
        <div>
          <p className={styles.eyebrow}>{coin.type || "Cryptocurrency"}</p>
          <h1>{coin.name}</h1>
          <p className={styles.symbol}>{coin.symbol}</p>
        </div>
        <span className={styles.rank}>Rank #{coin.rank || "-"}</span>
      </header>

      <section className={styles.contentGrid}>
        <article className={styles.panel}>
          <div className={styles.panelHeading}>
            <h2>About {coin.name}</h2>
            <span className={coin.is_active ? styles.active : styles.inactive}>
              {coin.is_active ? "Active" : "Inactive"}
            </span>
          </div>
          <p className={styles.description}>
            {valueOrFallback(coin.description)}
          </p>
        </article>
        <article className={styles.panel}>
          <h2>Project details</h2>
          <dl className={styles.detailList}>
            <div>
              <dt>Started</dt>
              <dd>{formatDate(coin.started_at)}</dd>
            </div>
            <div>
              <dt>Development</dt>
              <dd>{valueOrFallback(coin.development_status)}</dd>
            </div>
            <div>
              <dt>Proof type</dt>
              <dd>{valueOrFallback(coin.proof_type)}</dd>
            </div>
            <div>
              <dt>Organization</dt>
              <dd>{valueOrFallback(coin.org_structure)}</dd>
            </div>
            <div>
              <dt>Open source</dt>
              <dd>{coin.is_open_source ? "Yes" : "No"}</dd>
            </div>
          </dl>
        </article>
        <article className={`${styles.panel} ${styles.chartPanel}`}>
          <div className={styles.panelHeading}>
            <div>
              <p className={styles.eyebrow}>7-day market history</p>
              <h2>Price chart</h2>
            </div>
            <span className={styles.chartMeta}>{history.length} points</span>
          </div>
          <div className={styles.chart}>
            {history.length ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={history}
                  margin={{ top: 12, right: 8, left: 0, bottom: 0 }}
                >
                  <CartesianGrid
                    stroke="#26282d"
                    strokeDasharray="3 3"
                    vertical={true}
                  />
                  <XAxis
                    dataKey="date"
                    stroke="#336003"
                    tickLine={true}
                    axisLine={true}
                  />
                  <YAxis
                    width={72}
                    stroke="#a8a8e7"
                    tickLine={true}
                    axisLine={false}
                    tickFormatter={(value) =>
                      `$${Number(value).toLocaleString()}`
                    }
                    domain={["auto", "auto"]}
                  />
                  <Tooltip
                    contentStyle={{
                      border: "1px solid #353941",
                      borderRadius: "8px",
                      background: "#17191e",
                      color: "#f6f7fa",
                    }}
                    formatter={(value) => [
                      `$${Number(value).toLocaleString()}`,
                      "Price",
                    ]}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#242493"
                    strokeWidth={3}
                    dot={{ r: 3, fill: "#452703", strokeWidth: 0 }}
                    activeDot={{
                      r: 6,
                      fill: "#ffbd6b",
                      stroke: "#17191e",
                      strokeWidth: 2,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <p className={styles.muted}>No 7-day price history available.</p>
            )}
          </div>
        </article>
        <article className={styles.panel}>
          <h2>Tags</h2>
          <div className={styles.tags}>
            {coin.tags ? (
              coin.tags.map((tag) => (
                <span key={tag.id || tag.name}>{tag.name || tag}</span>
              ))
            ) : (
              <p className={styles.muted}>No tags available</p>
            )}
          </div>
        </article>

        <article className={styles.panel}>
          <h2>Useful links</h2>
          <div className={styles.links}>
            {detailLinks.map(
              ([label, key]) =>
                coin.links?.[key] && (
                  <a key={key} href={coin.links[key]?.[0]}>
                    {label} <span>↗</span>
                  </a>
                ),
            )}
            {coin.whitepaper?.link && (
              <a href={coin.whitepaper.link}>
                Whitepaper <span>↗</span>
              </a>
            )}
          </div>
        </article>
      </section>

      {coin.team?.length > 0 && (
        <section className={styles.panel}>
          <h2>Team</h2>
          <div className={styles.teamGrid}>
            {coin.team.map((member) => (
              <div className={styles.teamMember} key={member.id}>
                <strong>{member.name}</strong>
                <span>{member.position || "Contributor"}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

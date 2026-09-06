const BASE_URL = "https://api.coinpaprika.com/v1";

export async function fetchCoins() {
  const response = await fetch(`${BASE_URL}/tickers?limit=100`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}
export async function fetchCoinById(id) {
  const response = await fetch(`${BASE_URL}/coins/${id}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

export async function fetchCoinHistory(id) {
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 7);

  const params = new URLSearchParams({
    start: start.toISOString().slice(0, 10),
    end: end.toISOString().slice(0, 10),
    interval: "1d",
  });

  const response = await fetch(
    `${BASE_URL}/tickers/${id}/historical?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error(`History request failed: ${response.status}`);
  }

  return response.json();
}

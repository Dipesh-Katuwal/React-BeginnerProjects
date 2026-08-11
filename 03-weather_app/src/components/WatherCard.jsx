import styles from "./WeatherCard.module.css";

const WeatherCard = ({ weather,city }) => {

  if (!weather) {
    return null;
  }

  const current = weather.current_weather || {};
  const temperature = current.temperature ?? "--";
  const condition = current.weathercode ?? "Unknown";
  const humidity = weather.hourly?.relative_humidity_2m?.[0] ?? "--";
  const wind = current.windspeed ?? "--";
  const feelsLike = current.apparent_temperature ?? temperature;

  const weatherText =
    condition === 0
      ? "Clear"
      : condition === 1 || condition === 2 || condition === 3
        ? "Partly cloudy"
        : condition >= 45 && condition <= 48
          ? "Fog"
          : condition >= 51 && condition <= 67
            ? "Rain"
            : condition >= 71 && condition <= 77
              ? "Snow"
              : "Cloudy";

  return (
    <div className={styles.weatherdiv}>
      <h3 className={styles.city}>{city}</h3>
      <p className={styles.temp}>{temperature}°C</p>
      <p className={styles.condition}>{weatherText}</p>

      <div className={styles.details}>
        <div>
          <span>Humidity</span>
          <strong>{humidity}%</strong>
        </div>
        <div>
          <span>Wind</span>
          <strong>{wind} km/h</strong>
        </div>
        <div>
          <span>Feels like</span>
          <strong>{feelsLike}°C</strong>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

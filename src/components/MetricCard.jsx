export default function MetricCard({ info }) {
  // Constants
  const channelLowercase = info.channel.toLowerCase();
  const channelLogoObject = require(`../assets/icon-${channelLowercase}.svg`);
  const channelLogoURL = channelLogoObject.default;

  const trendDirection = info.change_today > 0 ? "up" : "down";
  const trendIconObject = require(`../assets/icon-${trendDirection}.svg`);
  const trendIconURL = trendIconObject.default;

  return (
    <article className="MetricCard">
      <header>
        <h3>{info.metric}</h3>
        <img className="social-icon" src={channelLogoURL} alt={info.channel} />
      </header>
      <div>
        <span className="prominent">{info.stat}</span>
        <div>
          <img className="trend-icon" src={trendIconURL} alt={trendDirection} />
          <span className={trendDirection + " trend"}>
            {Math.abs(info.change_today)}%
          </span>
        </div>
      </div>
    </article>
  );
}

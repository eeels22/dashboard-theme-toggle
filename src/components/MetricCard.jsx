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
      <header className="header-card">
        <h3>{info.metric}</h3>
        <img className="channel-icon" src={channelLogoURL} alt={info.channel} />
      </header>
      <span>{info.stat}</span>
      <span>
        <img src={trendIconURL} alt={trendDirection} />
        {info.change_today}%
      </span>
    </article>
  );
}

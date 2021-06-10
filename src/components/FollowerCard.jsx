export default function FollowerCard({ info }) {
  // Constants
  const channelLowercase = info.channel.toLowerCase();
  const channelLogoObject = require(`../assets/icon-${channelLowercase}.svg`);
  const channelLogoURL = channelLogoObject.default;

  const trendDirection = info.change_today > 0 ? "up" : "down";
  const trendIconObject = require(`../assets/icon-${trendDirection}.svg`);
  const trendIconURL = trendIconObject.default;

  return (
    <article className={channelLowercase + " FollowerCard"}>
      <header>
        <img className="social-icon" src={channelLogoURL} alt={info.channel} />
        <span>{info.handle}</span>
      </header>
      <div className="follower-count">
        <p className="statistic">{info.number_followers}</p>
        <p className="followers">FOLLOWERS</p>
      </div>
      <div>
        <img className="trend-icon" src={trendIconURL} alt={trendDirection} />
        <span className={trendDirection + " trend"}>
          {Math.abs(info.change_today)} Today
        </span>
      </div>
    </article>
  );
}

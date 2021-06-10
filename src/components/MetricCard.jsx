// NPM packages
import React from "react";

export default function MetricCard({ info }) {
  // Constants
  const channelLowercase = info.channel.toLowerCase();
  const channelLogoObject = require(`../assets/icon-${channelLowercase}.svg`);
  const channelLogoURL = channelLogoObject.default;

  const trendDirection = info.change_today > 0 ? "up" : "down";
  const trendIconObject = require(`../assets/icon-${trendDirection}.svg`);
  const trendIconURL = trendIconObject.default;

  return (
    <article>
      <span>{info.metric}</span>
      <img src={channelLogoURL} alt={info.channel} />
      <span>{info.stat}</span>
      <span>
        <img src={trendIconURL} alt={trendDirection} />
        {info.change_today}%
      </span>
    </article>
  );
}

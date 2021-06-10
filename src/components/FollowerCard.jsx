// NPM packages
import React from "react";

export default function FollowerCard({ info }) {
  // Constants
  const channelLowercase = info.channel.toLowerCase();
  const channelLogoObject = require(`../assets/icon-${channelLowercase}.svg`);
  const channelLogoURL = channelLogoObject.default;

  const trendDirection = info.change_today > 0 ? "up" : "down";
  const trendIconObject = require(`../assets/icon-${trendDirection}.svg`);
  const trendIconURL = trendIconObject.default;

  return (
    <article>
      <img src={channelLogoURL} alt={info.channel} />
      <span>{info.handle}</span>
      <p>{info.number_followers}</p>
      <p>Followers</p>
      <p>
        <img src={trendIconURL} alt={trendDirection} />
        {info.change_today} Today
      </p>
    </article>
  );
}

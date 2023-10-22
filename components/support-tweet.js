import { useEffect, useState } from "react";
import TweetEmbed from "react-tweet-embed";
import getTweetId from "./tweet-ids";

const SupportTweet = () => {
  const [tweet, setTweet] = useState("");

  useEffect(() => {
    setTweet(getTweetId());
  }, []);

  if (!tweet) {
    return <h3 className="tweet-head">loading …</h3>;
  }

  return <div className="support-tweet"></div>;
};

export default SupportTweet;

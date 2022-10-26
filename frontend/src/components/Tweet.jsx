import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import { useState, useEffect } from 'react';

const Tweet = () => {
    const [tweets, setTweets] = useState([]);

    return (
        <TwitterTweetEmbed
        tweetId='1582878437101821952'
        options={{width: 388}}
        />
    );
};

export default Tweet;
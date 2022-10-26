//Import package
import { Client } from "twitter-api-sdk";

const twitterClient = new Client(process.env.REACT_APP_TWITTER_BEARER_TOKEN);

export const fetchTweets = async () => {
    const tweets = await twitterClient.tweets.usersIdTweets({
        id: 59325073,
        maxResults: 5,
    });
    console.log(tweets);
    // return tweets;
}
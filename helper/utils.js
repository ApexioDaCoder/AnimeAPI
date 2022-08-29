import axios from "axios";
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36";
const headerOption = { headers: { "User-Agent": USER_AGENT } };

export const decodeString = (string) => {
  return Buffer.from(string, "base64").toString();
};

export const encodeString = (string) => {
  return Buffer.from(string).toString("base64");
};

export const decodeStreamingLinkAnimix = async (animixLiveApiLink) => {
  const animixLiveApiRegex = new RegExp(/(aHR0[^#]+)/);
  const res = await axios.get(animixLiveApiLink, headerOption);

  const plyrLink = await res.request.res.responseUrl;
  const sourceLink = atob(animixLiveApiRegex.exec(plyrLink)[0]);

  return sourceLink;
};

export const MAL_ID = process.env.MAL_ID;

export const malFields = [
  "id",
  "title",
  "main_picture",
  "alternative_titles",
  "start_date",
  "end_date",
  "synopsis",
  "mean",
  "rank",
  "popularity",
  "num_list_users",
  "num_scoring_users",
  "nsfw",
  "created_at",
  "updated_at",
  "media_type",
  "status",
  "genres",
  "my_list_status",
  "num_episodes",
  "start_season",
  "broadcast",
  "source",
  "average_episode_duration",
  "rating",
  "pictures",
  "background",
  "related_anime",
  "related_manga",
  "recommendations",
  "studios",
  "statistics",
];

export const malSearchFieldsDefault = [
  "id",
  "title",
  "main_picture",
  "alternative_titles",
  "synopsis",
  "rating",
  "mean",
  "status",
  "start_date",
  "end_date",
];
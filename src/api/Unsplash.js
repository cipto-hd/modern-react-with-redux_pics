import Axios from "axios";

const Unsplash = Axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID qAt409uidDlU527bj52wobKSDLl27EOxMa4tz6WuWP8",
  },
});

export const getUnsplashImages = async (term) => {
  const response = await Unsplash.get("search/photos", {
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default Unsplash;

// import axios from "axios";

// const MY_ID = "HrlTSFH7Qu924M-r-T_v2q005msp5YG_HUCnt_RjYeI";
// const fetchPhotos = async (query, page, perPage) => {
//   const response = await axios.get(
//     `https://api.unsplash.com/search/photos?query=${query}&page=${page}$per_page=12`,
//     {
//       headers: {
//         Authorization: `Client-ID ${MY_ID}`,
//       },
//     }
//   );
//   return response.data.results;
// };

// export default fetchPhotos;

import axios from "axios";

const API_KEY = "HrlTSFH7Qu924M-r-T_v2q005msp5YG_HUCnt_RjYeI";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.headers.common["Accept-Version"] = "v1";

const getImage = async (query, page, perPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: query,
      orientation: "landscape",
      per_page: perPage,
      page: page,
    },
  });
  return response.data;
};

export default getImage;

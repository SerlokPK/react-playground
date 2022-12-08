import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID uJVlXOxiHEGSmbIQaHmOW2-AAK2w5WjBqAQuTzIXbPU",
    },
    params: {
      query: term,
    },
  });

  return response.data.result;
};

export default searchImages;

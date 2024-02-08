import axios from "axios";

const fetchData = async (url, setData, setIsLoading) => {
  try {
    const { data } = await axios.get(url);
    setData(data);
  } catch (error) {
    console.log(error.response);
  }
  setIsLoading(false);
};

export default fetchData;

import axios from "axios";

const fetchComments = async (page) => {
  try {
    const { data } = await axios.get(
      "https://jordan.ashton.fashion/api/goods/30/comments",
      {
        params: {
          page,
        },
      }
    );
    return data;
  } catch (error) {
    console.log("error ", { error });
    return [];
  }
};

const addComments = async (comment) => {
  try {
    const data = await axios.post(
      "https://jordan.ashton.fashion/api/goods/30/comments",
      { ...comment }
    );
    return data;
  } catch (error) {
    console.log("error ", { error });
    return [];
  }
};

export default {
  fetchComments,
  addComments,
};

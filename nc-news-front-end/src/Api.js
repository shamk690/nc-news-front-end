import axios from "axios";
const url = "https://shamila-nc-news.herokuapp.com/api";

export const getArticleList = query => {
  return axios
    .get(`${url}/articles`, { params: query })
    .then(({ data: { articles } }) => {
      //   console.log("articles   ", articles);
      return articles;
    });
};
export const getAllTopics = query => {
  return axios
    .get(`${url}/topics`, { params: query })
    .then(({ data: { topics } }) => {
      //  console.log("topics  ", topics);
      return topics;
    });
};

export const getSingleArticle = id => {
  return axios.get(`${url}/articles/${id}`).then(({ data: { article } }) => {
    // console.log("id    ", id);
    // console.log("get single articles", article);
    return article;
  });
};
export const getCommentByArticleId = id => {
  return axios
    .get(`${url}/articles/${id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const patchArticles = (id, direction) => {
  return axios.patch(`${url}/articles/${id}`, direction).then(article => {});
};

export const patchComments = (id, direction) => {
  return axios.patch(`${url}/comments/${id}`, direction).then(comment => {
    return comment;
  });
};

export const sortBy = query => {
  // console.log("api   ", typeof query);

  return axios
    .get(`${url}/articles${query}`, { params: query })
    .then(({ data: { articles } }) => {
      // console.log("sort by response api", articles);
      //console.log(url);

      return articles;
    });
  // .catch({ message: "not found" });
};

export const getUser = username => {
  return axios.get(`${url}/users/${username}`).then(({ data: { user } }) => {
    return user;
  });
};

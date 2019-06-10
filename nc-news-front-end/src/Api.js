import axios from "axios";

const url = "https://shamila-nc-news.herokuapp.com/api";

export const getArticleList = query => {
  // console.log("qqqq", query);
  return axios

    .get(`${url}/articles`, { params: query })

    .then(({ data: { articles } }) => {
      return articles;
    });
};
export const getAllTopics = query => {
  return axios
    .get(`${url}/topics`, { params: query })
    .then(({ data: { topics } }) => {
      return topics;
    });
};

export const getSingleArticle = id => {
  return axios.get(`${url}/articles/${id}`).then(({ data: { article } }) => {
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
  return axios
    .get(`${url}/articles${query}`, { params: query })
    .then(({ data: { articles } }) => {
      return articles;
    });
  // .catch({ message: "not found" });
};

export const getUser = username => {
  return axios.get(`${url}/users/${username}`).then(({ data: { user } }) => {
    return user;
  });
};
export const submitArticle = body => {
  return axios.post(`${url}/articles/`, body).then(({ data: { article } }) => {
    return article;
  });
};

export const postComment = (id, body) => {
  return axios
    .post(`${url}/articles/${id}/comments`, body)
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteComment = id => {
  return axios.delete(`${url}/comments/${id}`).then(({ data: { comment } }) => {
    return comment;
  });
};

export const deleteArticle = id => {
  return axios.delete(`${url}/articles/${id}`).then(({ data: { article } }) => {
    return article;
  });
};

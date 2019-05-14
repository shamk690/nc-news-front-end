import React from "react";
import axios from "axios";
const url = "https://shamila-nc-news.herokuapp.com/api";

export const getArticleList = query => {
  return axios
    .get(`${url}/articles`, { params: query })
    .then(({ data: { articles } }) => {
      // console.log("query   ", articles);
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

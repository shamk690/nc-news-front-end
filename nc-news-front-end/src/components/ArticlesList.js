import React, { Component } from "react";
// import * as Api from "../Api";
import { getArticleList, sortBy } from "../Api";
import { Link } from "@reach/router";
import "./style/style.css";
import Topics from "./Topics";

export default class ArticleList extends Component {
  state = {
    articleList: [],
    sortedList: ""
  };

  render() {
    //const { location } = this.props;
    // console.log(location.search);
    return (
      <div className="mainContainer">
        <ul className="articleContainer">
          {this.state.articleList.map(article => {
            return (
              <div key={article.article_id}>
                {" "}
                <p />
                <Link to={`/articles/${article.article_id}`}>
                  <li>{article.title}</li>
                </Link>
                <li>{article.created_at}</li>
                <li>author: {article.author}</li>
                <li>comments: {article.comment_count}</li>
                <p>{article.body}</p>
                <p>From {article.topic}</p>
                <p>{article.votes}</p>
              </div>
            );
          })}
        </ul>
        <div className="topicsContainer">
          <Topics />
        </div>
      </div>
    );
  }

  componentDidMount() {
    // console.log(this.props.path);
    const query = { topic: this.props.topic };
    getArticleList(query).then(articles => {
      this.setState({ articleList: articles });
      // console.log("mounted ", articles);
    });
  }

  componentDidUpdate = (prevProps, prevState) => {
    //console.log("updated ", this.props);
    if (prevProps.topic !== this.props.topic) {
      const query = { topic: this.props.topic };
      getArticleList(query).then(articles => {
        this.setState({ articleList: articles });
        // console.log("mounted ", articles);
      });
    } else if (prevProps.location.search !== this.props.location.search) {
      console.log("search  ", this.props.location.search);
      sortBy(this.props.location.search).then(articles => {
        this.setState({ articleList: articles });
      });
    }
  };
}

//   getArticles() {}
// }

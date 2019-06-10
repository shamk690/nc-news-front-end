import React, { Component } from "react";
import { getArticleList, sortBy, deleteArticle } from "../Api";
import { Link } from "@reach/router";
import Moment from "react-moment";
import "moment-timezone";

import "./style/style.css";
import Topics from "./Topics";
import { navigate } from "@reach/router";
export default class ArticleList extends Component {
  state = {
    articleList: [],
    total_count: 0,
    back: false,
    limit: 10,
    page: 0, //default pagew
    response: true,
    prevPage: 0
  };

  render() {
    const { articleList } = this.state;

    if (articleList.length) {
      return (
        <div className="grid">
          {!this.props.topic ? (
            <h1>All Articles</h1>
          ) : (
            <h1>{this.props.topic}</h1>
          )}{" "}
          <div className="item3">
            <label>Total Result {this.state.total_count}</label>
            {this.limitArticlesPerPage()}
            {/* <button onClick={() => this.fetchArticles()}>submit</button> */}
            {articleList.map((article, index) => {
              return (
                <div className="article" key={article.article_id}>
                  <p id="title"> ARTICLE ID {article.article_id}</p>
                  <p />
                  <Link to={`/articles/${article.article_id}`} className="link">
                    <p id="title">{article.title}</p>
                  </Link>
                  <p className="article-info">author: {article.author}</p>
                  <p className="article-info">
                    {" "}
                    comments: {article.comment_count}
                  </p>
                  <p className="article-info" id="topic">
                    From: {article.topic}
                  </p>
                  <p id="vote">votes: {article.votes}</p>
                  <p id="date">
                    <Moment locale="en" format="MMMM Do YYYY, h:mm:ss a">
                      {article.created_at}
                    </Moment>
                  </p>{" "}
                  {this.props.loggedInUser === article.author && (
                    <button
                      id="deleteArticle"
                      onClick={() => this.handleDelete(article.article_id)}
                    >
                      Delete
                    </button>
                  )}{" "}
                  <Link to={`/articles/${article.article_id}`} id="readArticle">
                    Read This Article
                  </Link>
                </div>
              );
            })}{" "}
            <button
              disabled={
                this.state.page < this.state.limit || this.props.location.search
              }
              onClick={() => this.handlepageChangeClick(-1)}
            >
              Back
            </button>
            <button
              disabled={!this.state.response}
              onClick={() => this.handlepageChangeClick(1)}
            >
              Next
            </button>
          </div>
          <div className="item4">
            <Topics />
            <br />
          </div>
          {/* code for pagination starts here */}
          <footer className="item5" />
        </div>
      );
    } else {
      return <h1>loading....</h1>;
    }
  }

  componentDidMount(prevProp) {
    this.fetchTotalCount();
    const query = { topic: this.props.topic };
    this.selectArticles(query, 0);
  }

  fetchTotalCount = () => {
    sortBy(`?limit=1&p=0`).then(articles => {
      this.setState({
        total_count: articles[0].total_count
      });
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      const query = {
        topic: this.props.topic,
        limit: this.state.limit,
        p: 0
      };

      getArticleList(query).then(articles => {
        // this.state.limit === this.state.total_count ||
        // (articles.length < this.state.limit && !this.state.back)
        //   ? this.setState({ response: false })
        //   : this.setState({ response: true });

        this.setState({
          page: 0,
          articleList: articles,
          total_count: articles[0].total_count,
          response:
            this.state.limit === this.state.total_count ||
            (articles.length < this.state.limit && !this.state.back)
              ? false
              : true
        });
      });
    } else if (prevProps.location.search !== this.props.location.search) {
      sortBy(this.props.location.search).then(articles => {
        this.setState({
          page: 0,
          articleList: articles
        });
      });
      this.props.location.search = "";
    }
  }

  handleDelete = id => {
    deleteArticle(id).then(() => {
      const filterArticle = this.state.articleList.filter(article => {
        this.fetchTotalCount();
        return article.article_id !== id;
      });
      this.setState({
        articleList: filterArticle
        //  total_count: this.state.total_count - 1
      });
    });
  };

  ///////////code for pagination///////////////////

  handleChange = event => {
    this.setState({ limit: event.target.value });
  };

  limitArticlesPerPage = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {" "}
          <br />
          <br />
          <input
            // disabled={this.props.location.search}
            type="number"
            id="selectLimit"
            min="5"
            max={this.state.total_count}
            step="1"
            value={this.state.limit}
            onChange={this.handleChange}
          />{" "}
          <button>submit</button>
        </form>{" "}
      </div>
    );
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ page: 0 });
    this.fetchArticles();
  };
  handlepageChangeClick = direction => {
    if (direction < 0) {
      console.log("directions -1 inside if", this.state.page);
      const { limit } = this.state;
      this.setState(prevState => ({
        page: prevState.page - prevState.limit,
        back: true
      }));

      this.fetchArticles({ p: this.state.page - limit });
    } else {
      this.setState(prevState => ({
        back: false
      }));
      this.fetchArticles({ p: this.state.page + direction });
    }
  };
  fetchArticles = (params = { p: 0 }) => {
    const { p } = params;

    // this.state.limit === this.state.total_count
    //   ? this.setState({ response: false })
    //   : this.setState({ response: true });

    this.setState({
      response: this.state.limit === this.state.total_count ? false : true
    });
    if (this.props.topic) {
      console.log("topic", p);
      const query = {
        topic: this.props.topic,
        limit: +this.state.limit,
        p: p
      };

      this.selectArticles(
        query,

        p
      );
    } else {
      sortBy(`?limit=${this.state.limit}&p=${p}`).then(articles => {
        if (articles.length < this.state.limit && !this.state.back) {
          this.setState(prevState => ({ response: false }));
        }
        console.log(this.state.page, "before adding");

        this.setState(prevState => ({
          articleList: articles,
          page: !prevState.back
            ? Number(prevState.page + (prevState.limit - 1))
            : Number(prevState.page)
        }));
        console.log(this.state.page, "after adding");
      });
    }
  };

  selectArticles = (query, page) => {
    console.log("before setstate", this.state.page);
    getArticleList(query)
      .then(articles => {
        if (articles.length < this.state.limit && !this.state.back) {
          this.setState({ response: false });
        }

        this.setState(prevState => ({
          articleList: articles,
          page: !prevState.back
            ? Number(prevState.page + (prevState.limit - 1))
            : Number(prevState.page)

          // total_count: `${this.state.total_count} displaying ${
          //   articles[0].total_count
          // }to `
        }));
        console.log("after setstat=", this.state.page);
      })
      .catch(({ response: { data, status } }) => {
        navigate("/error", {
          state: { from: "topic", msg: "resourse not found ", status },
          replace: true
        });
      });
  };
}

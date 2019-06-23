import React, { Component } from "react";
import { getArticleList, sortBy, deleteArticle } from "../Api";
import { Link } from "@reach/router";
import Moment from "react-moment";
import "moment-timezone"; //
import "./style/style.css";
import Topics from "./Topics";
import { navigate } from "@reach/router";
export default class ArticleList extends Component {
  state = {
    articleList: [],
    total_count: 0,
    back: false,
    limit: 10,
    page: 0, //default pag
    response: true,
    pageNum: 1,
    totalPage: 0
  };

  render() {
    const { articleList } = this.state;
    const { pageNum } = this.state;
    const { totalPage } = this.state;
    if (articleList.length) {
      return (
        <div className="grid">
          {!this.props.topic ? (
            <h1>All Articles</h1>
          ) : (
            <h1>{this.props.topic}</h1>
          )}{" "}
          <div className="item3">
            <label>Total Results: {this.state.total_count}</label>
            <br />
            <div className="" id="limitDiv">
              {this.limitArticlesPerPage()}
            </div>
            {articleList.map((article, index) => {
              return (
                <div className="article" key={article.article_id}>
                  <p />
                  <Link to={`/articles/${article.article_id}`} className="link">
                    <p id="title">{article.title}</p>
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
                      <Moment locale="en" format="DD/MM/YYYY">
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
                  </Link>
                  <Link to={`/articles/${article.article_id}`} id="readArticle">
                    Read This Article
                  </Link>
                </div>
              );
            })}{" "}
            <div>
              <button
                disabled={this.state.page < this.state.limit || pageNum === 1}
                onClick={() => this.handlepageChangeClick(-1)}
              >
                &laquo; Back
              </button>
              <button
                disabled={!this.state.response || pageNum === totalPage}
                onClick={() => this.handlepageChangeClick(1)}
              >
                Next &raquo;
              </button>

              <p>
                Page {pageNum} of {totalPage}
              </p>
            </div>
          </div>
          <div className="item4">
            <Topics />
            <br />
          </div>
          <footer className="item5" />
        </div>
      );
    } else {
      return <h1>loading....</h1>;
    }
  }

  componentDidMount(prevProp) {
    this.fetchTotalCount();
  }

  fetchTotalCount = () => {
    this.fetchArticles();
  };
  componentDidUpdate(prevProps, prevState) {
    const { limit } = this.state;
    if (prevProps.topic !== this.props.topic) {
      const query = {
        topic: this.props.topic,
        limit: this.state.limit,
        p: 0
      };

      getArticleList(query)
        .then(articles => {
          this.setState({
            page: 0,
            articleList: articles,
            total_count: articles[0].total_count,
            response:
              this.state.limit === this.state.total_count ||
              (articles.length < this.state.limit && !this.state.back)
                ? false
                : true,
            totalPage:
              articles.length > 1 || prevState.totalPage === 0
                ? Math.ceil(articles[0].total_count / limit)
                : 1,
            pageNum: 1
          });
        })
        .catch(({ response: { data, status } }) => {
          navigate("/error", {
            state: { msg: "This topic does not have any article yet " },
            replace: true
          });
        });
    } else if (prevProps.location.search !== this.props.location.search) {
      // this.setState({ page: this.state.page });
      this.fetchArticles(this.props.location.search);
    }
    this.props.location.search = "";
  }

  handleDelete = id => {
    deleteArticle(id).then(() => {
      const filterArticle = this.state.articleList.filter(article => {
        this.fetchTotalCount();
        return article.article_id !== id;
      });
      this.setState({
        articleList: filterArticle
      });
    });
  };

  ///////////code for pagination//////////////////

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
          Articles per page: &nbsp;
          <input
            className="limit"
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
    this.setState(prevState => ({
      page: 0,
      totalPage: 0,
      pageNum: 1
    }));
    this.fetchArticles();
  };
  handlepageChangeClick = direction => {
    const { pageNum } = this.state;

    if (direction < 0) {
      const { limit } = this.state;
      this.setState(prevState => ({
        page: prevState.page - prevState.limit,
        back: true,
        pageNum: pageNum - 1
      }));

      this.fetchArticles({ p: this.state.page - limit });
    } else {
      this.setState(prevState => ({
        back: false,
        pageNum: pageNum + 1
      }));

      this.fetchArticles({ p: this.state.page });
    }
  };
  fetchArticles = (params = { p: 0 }) => {
    const { p } = params;

    this.setState({
      response: this.state.limit === this.state.total_count ? false : true
    });
    if (this.props.topic) {
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
      const { search } = this.props.location;
      let query = `?limit=${this.state.limit}&p=${p}`;
      if (search) query = search;
      sortBy(query).then(articles => {
        if (articles.length < this.state.limit && !this.state.back) {
          this.setState(prevState => ({
            response: false
          }));
        }
        this.setState(prevState => ({
          articleList: articles,
          page: !prevState.back
            ? Number(prevState.page) + Number(prevState.limit)
            : Number(prevState.page),
          total_count:
            prevState.total_count === 0
              ? articles[0].total_count
              : prevState.total_count,
          totalPage:
            prevState.total_count === 0 || prevState.totalPage === 0
              ? Math.ceil(articles[0].total_count / prevState.limit)
              : prevState.totalPage
        }));
      });
    }
  };

  selectArticles = (query, page) => {
    getArticleList(query)
      .then(articles => {
        if (articles.length < this.state.limit && !this.state.back) {
          this.setState({ response: false });
        }

        this.setState(prevState => ({
          articleList: articles,
          page: !prevState.back
            ? Number(prevState.page) + Number(prevState.limit)
            : Number(prevState.page),
          total_count:
            prevState.total_count === 0
              ? articles[0].total_count
              : prevState.total_count,
          totalPage:
            prevState.totalPage === 0
              ? Math.ceil(articles[0].total_count / prevState.limit)
              : prevState.totalPage
        }));
      })
      .catch(({ response: { data, status } }) => {
        navigate("/error", {
          state: { msg: "Topic Not Found ", status },
          replace: true
        });
      });
  };
}

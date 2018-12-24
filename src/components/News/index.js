import React, { Component } from "react";
import "./News.css";
import axios from "axios";
import SecNavbar from "../SecNavbar";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      date: ""
    };
    this.getDate = this.getDate.bind(this);
    this.getContent = this.getContent.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5a86604b83ed474991ed1221830dd50b`
      )
      .then(res => {
        const articles = res.data;
        this.setState({ articles: articles.articles });
      });
  }

  getContent() {
    let content = [];
    for (let i = 0; i < 6; i++) {
      let article =
        this.state.articles.length !== 0 ? this.state.articles[i] : "TOPIC ";
      content.push(
        <a href={article.url} style={{ marginBottom: "100px" }}>
          <div className="item">
            <img
              className="news-image"
              alt="news-content-left"
              src={article.urlToImage}
            />
            <div className="topic">{article.title}</div>
            <div className="news-author">
              <b>By: </b>
              <em>{article.author}</em>
            </div>
            <div className="news-author">
              <b>Published: </b>
              <em>{this.state.date}</em>
            </div>

            <div className="news-text">{article.description}</div>
          </div>
        </a>
      );
    }
    return content;
  }

  getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = mm + "/" + dd + "/" + yyyy;

    this.setState({ date: today });
  }

  render() {
    if (this.state.date === "") this.getDate();

    let content = this.getContent();

    const topbg = {
      backgroundImage: "url('../assets/newsbg.jpg')"
    };

    return [
      <SecNavbar />,
      <div className="news">
        <div className="news-top" style={topbg}>
          <div className="news-top-first-title">TechCrunch</div>
          <div className="news-top-second-title">NEWSLETTER</div>
        </div>

        <div className="news-date">
          <p>Date: {this.state.date}</p>
        </div>
        <div className="news-content">{content}</div>
      </div>,
      <div className="thanks">Powered by 'News API'.</div>
    ];
  }
}

export default News;

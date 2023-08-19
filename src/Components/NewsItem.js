import React, { Component } from "react";
import News from "./News";


export class NewsItem extends Component {

    
  

  render() {
    let { title, summary, imgUrl, newsUrl } = this.props;
    return (
      <div style={{padding: '20px'}}>
      <div className="card" style={{width: '18rem'}}>
        <img src={imgUrl} style={{height: '200px'}} className="card-img-top" alt="NewsImage" />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">
            {this.props.summary}
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
      </div>
    );
  }
}

export default NewsItem;

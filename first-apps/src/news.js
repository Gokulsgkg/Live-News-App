import "./App.css";
import { useEffect, useState } from "react";
function News(props) {
  return (
    <div className="news">
      <div className="news-img">
        {props.article.urlToImage !== null ? (
          <img src={props.article.urlToImage} />
        ) : (
          <img src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=170667a&w=0&k=20&c=Q7gLG-xfScdlTlPGFohllqpNqpxsU1jy8feD_fob87U=" />
        )}
      </div>
      <h4>{props.article.title}</h4>
      <p>
        {props.article.description?.substring(0, 100).concat("...")}
        <a href={props.article.url} target="_blank">
          Read More
        </a>
      </p>

      <div className="source">
        <p>Author:{props.article.author}</p>
        <p>{props.article.source.name}</p>
      </div>
    </div>
  );
}
export default News;

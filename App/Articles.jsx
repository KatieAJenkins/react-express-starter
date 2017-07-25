import React from 'react';
import './Articles.css';

class Articles = (articles) => {
  return props.articles.map((article) => {
    return (
      <article className = "Articles">
        <h2>{article.title}</h2>
        <h2>{article.text}</h2>
      </article>
    )
  })
}

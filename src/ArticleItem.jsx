import * as React from "react";
function ArticleItem({ article, onClickToggle, onClickRemove }) {
  return (
    <li>
      <a
        href={`#${article.id}`}
        onClick={onClickToggle.bind(null, article.id)}
        title="Toggle Summary"
      >
        {article.title}
      </a>
      <a
        href={`#${article.id}`}
        onClick={onClickRemove.bind(null, article.id)}
        title="Remove"
      >
        Remove
      </a>
      <p style={{ display: article.display }}>{article.summary}</p>
    </li>
  );
}
export default ArticleItem;

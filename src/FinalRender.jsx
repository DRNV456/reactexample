import ArticleList from "./ArticleList";
import AddArticle from "./AddArticle";
import MyFeature from "./MyFeature";
import * as React from "react";

function MyFun() {
  return (
    <section>
      <MyFeature
        addArticle={({
          title,
          summary,
          onChangeSummary,
          onChangeTitle,
          onClickAdd,
        }) => (
          <AddArticle
            title={title}
            summary={summary}
            onChangeSummary={onChangeSummary}
            onChangeTitle={onChangeTitle}
            onClickAdd={onClickAdd}
          />
        )}
        articleList={({ articles, onClickToggle, onClickRemove }) => (
          <ArticleList
            articles={articles}
            onClickRemove={onClickRemove}
            onClickToggle={onClickToggle}
          />
        )}
      />
    </section>
  );
}

export default MyFun;

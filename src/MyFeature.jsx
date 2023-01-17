import * as React from "react";

const id = (function* () {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

function MyFeature({ addArticle, articleList }) {
  const [title, setTitle] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [articles, setArticles] = React.useState([
    { id: id.next(), summary: "Summary1", title: "Title1", display: "none" },
    { id: id.next(), summary: "Summary2", title: "Title2", display: "none" },
    { id: id.next(), summary: "Summary3", title: "Title3", display: "none" },
    { id: id.next(), summary: "Summary4", title: "Title4", display: "none" },
    { id: id.next(), summary: "Summary5", title: "Title5", display: "none" },
  ]);

  function onChangeSummary(e) {
    setSummary(e.target.value);
  }

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  function onClickRemove(id) {
    setArticles(articles.filter((article) => article.id !== id));
  }

  function onClickToggle(id) {
    const index = articles.findIndex((article) => article.id === id);
    const updatedArticles = [...articles];
    updatedArticles[index] = {
      ...articles[index],
      display: articles[index].display ? "" : "none",
    };
    setArticles(updatedArticles);
  }

  function onClickAdd() {
    setArticles([
      ...articles,
      {
        id: id.next(),
        title: title,
        summary: summary,
        display: "none",
      },
    ]);
    setTitle("");
    setSummary("");
  }
  return (
    <section>
      {addArticle({
        title,
        summary,
        onChangeSummary,
        onChangeTitle,
        onClickAdd,
      })}
      {articleList({ articles, onClickToggle, onClickRemove })}
    </section>
  );
}
export default MyFeature;

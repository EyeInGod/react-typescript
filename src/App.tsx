import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { addArticle, removeArticle } from "./store/actionCreators";
import { Dispatch } from "redux";
import AddArticle from "./components/AddArticle";
import Article from "./components/Article";
import "./App.css";

const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  );
};

export default App;

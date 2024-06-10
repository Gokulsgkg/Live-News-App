import "./App.css";
import News from "./news";
import { useState, useEffect } from "react";
function App() {
  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("microsoft");
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${category}&from=2024-06-06&apiKey=e0242cf49d88409eb5fb1bb3d9fb39f4`
    )
      .then((Response) => Response.json())
      .then((news) => {
        console.log(news);
        setArticles(news.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);
  return (
    <div className="App">
      <header className="header">
        <h2>Live News App</h2>
        <input
          type="text"
          placeholder="Search News"
          onChange={(event) => {
            if (event.target.value !== "") {
              setCategory(event.target.value);
            } else {
              setCategory("microsoft");
            }
          }}
        ></input>
      </header>
      <section className="news-articles">
        {articles.length !== 0 ? (
          articles.map((article, index) => {
            return <News article={article} key={index} />;
          })
        ) : (
          <h3>NO NEWS FOUND FOR SEARCHED TEXT</h3>
        )}
      </section>
    </div>
  );
}
export default App;

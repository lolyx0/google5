import { useLocation } from "react-router-dom";
import style from "./ResultPage.module.css";
import mockData from "./mockData";

function ResultPage() {
  const location = useLocation();
  const search = location.state?.search;

  return (
    <>
      <nav className={style.RPage}>
        <ul>
          <li>
            <a href="/">
              <img src="googleLogo.png" className={style.logo} alt="logo" />
            </a>
          </li>
          <li>
            <input
              type="text"
              className={style.Search}
              placeholder="Search Google or type a URL"
              defaultValue={search}
            />
          </li>
          <li>
            <img src="appButton.png" className={style.appbt} />
          </li>
        </ul>
      </nav>
      <nav className={style.Nav2}>
        <ul>
          <li>
            <a href="./ResultPage">All</a>
          </li>
          <li>
            <a href="./ResultPage">Images</a>
          </li>
          <li>
            <a href="./ResultPage">News</a>
          </li>
          <li>
            <a href="./ResultPage">Shopping</a>
          </li>
          <li>
            <a href="./ResultPage">Videos</a>
          </li>
          <li>
            <a href="./ResultPage">Maps</a>
          </li>
          <li>
            <a href="./ResultPage">Books</a>
          </li>
        </ul>
      </nav>
      <div className={style.searchResults}>
        <div className={style.resultItem}>
          <ul className={style.data}>
            {mockData.map((data) => (
              <li key={data.id}>
                <a className={style.link}>{data.url} </a>
                <br />
                {data.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ResultPage;

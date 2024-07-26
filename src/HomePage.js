import style from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function HomePage() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      setError("Search field cannot be empty");
    } else {
      setError("");
      navigate("/ResultPage", { state: { search } });
    }
  };

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <main>
        <form onSubmit={handleSubmit}>
          <nav>
            <ul>
              <li>
                <a href="#">Gmail</a>
              </li>
              <li>
                <a href="#">Images</a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="appButton.png"
                    className={style.appBtn}
                    alt="App Button"
                  />
                </a>
              </li>
            </ul>
          </nav>

          <div className={style.container}>
            <img
              src="googleLogo.png"
              className={style.logo}
              alt="Google Logo"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={style.Search}
              placeholder="Search"
            />
            {error && <p className={style.error}>{error}</p>}
          </div>
          <div className={style.btns}>
            <button type="submit" className={style.searchbtn}>
              Google Search
            </button>
            <input
              type="button"
              value="I am Feeling Lucky"
              className={style.searchbtn}
              onClick={() => alert("Feeling Lucky!")}
            />
          </div>
        </form>
      </main>

      <footer>
        <div className={style.panel}>
          <ul>
            <li>
              <a href="#">Advertising</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">How Search Works</a>
            </li>
          </ul>

          <ul className={style.right}>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default HomePage;

import Card from "../Card";

import cardPokemon from "../../assets/img/cardPokemon.png";
import cardWeather from "../../assets/img/cardWeather.png";
import cardNetflix from "../../assets/img/cardNetflix.png";

import "./projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-content">
        <Card>
          <img className="card__img" src={cardPokemon} alt="Pokemon" />

          <p className="card__title">Pokemon</p>

          <div className="card__content">
            {/* <div className="card__content-stack">
              <i title="HTML 5" className="fab fa-html5"></i>
              <i title="CSS 3" className="fab fa-css3"></i>
              <i title="ES6" className="fab fa-js-square"></i>
            </div>

            <p className="card__content-desc">
              A classic Pokemon game clone with{" "}
              <a
                href="https://pokeapi.co/docs/v2"
                target="_blank"
                rel="noreferrer"
              >
                Poke API
              </a>
            </p> */}

            <div className="card__content-btn">
              <a
                href="https://crixxcroxx.github.io/pokemon/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Live
              </a>
              <a
                href="https://github.com/crixxcroxx/pokemon"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Code
              </a>
            </div>
          </div>
        </Card>

        <Card>
          <img className="card__img" src={cardWeather} alt="User" />

          <p className="card__title">Weather App</p>

          <div className="card__content">
            <div className="card__content-btn">
              <a
                href="https://crixxcroxx.github.io/openWeather-app/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Live
              </a>
              <a
                href="https://github.com/crixxcroxx/openWeather-app"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Code
              </a>
            </div>
          </div>
        </Card>

        <Card>
          <img className="card__img" src={cardNetflix} alt="User" />

          <p className="card__title">Netflix Clone</p>

          <div className="card__content">
            <div className="card__content-btn">
              <a
                href="https://crixxcroxx.github.io/netflix-clone/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Live
              </a>
              <a
                href="https://github.com/crixxcroxx/netflix-clone"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Code
              </a>
            </div>
          </div>
        </Card>
      </div>

      <a
        href="https://github.com/crixxcroxx/"
        target="_blank"
        rel="noreferrer"
        className="more-btn section-btn"
      >
        More
      </a>
    </div>
  );
}

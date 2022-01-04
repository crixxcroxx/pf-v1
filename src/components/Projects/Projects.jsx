import Card from "../Card";

import "./projects.css";

export default function Projects() {

  return (
    <div className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects__content">
        <Card>
          <img className="card__img" src="https://unsplash.it/300" alt="User" />

          <p className="card__title">xx</p>

          <div className="card__content">
            <div className="card__content-stack">
              <i title="HTML 5" class="fab fa-html5"></i>
              <i title="CSS 3" class="fab fa-css3"></i>
              <i title="ES6" class="fab fa-js-square"></i>
            </div>

            <p className="card__content-desc">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue metus sem. Fusce sit amet urna imperdiet, porttitor dui sed, fermentum quam. Sed nunc augue, ultrices quis vehicula nec, vehicula sit amet enim. Integer mollis lectus non molestie vestibulum.
            </p>

            <div className="card__content-btn">
              <button>Live</button>
              <button>Code</button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
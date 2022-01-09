import "./about.css";

export default function About() {

  return (
    <div className="about" id="about">
      <h2 className="section-title">About</h2>

      <div className="about-content">
        <img src="https://unsplash.it/500" alt="User" />

        <div>
          <p>
            Hi I'm Cris, a curiosity-driven web developer focused on creating and designing websites. My approach in design is minimalism, "less is more", I like its clean look but doesn't compromise the details and highlights the most important things.
          </p>
          <p>
            I always feel excited whenever I code and explore new things related to tech and as of date, I am still studying technologies in web and still digging to learn more.
          </p>
        </div>
      </div>
    </div>
  );
}
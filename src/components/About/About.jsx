import "./about.css";

export default function About() {

  return (
    <div className="about">
      <h2 className="section-title">About</h2>

      <div className="about-content">
        <img className="about__img" src="https://unsplash.it/500" alt="User" />

        <div className="about__text">
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue metus sem. Fusce sit amet urna imperdiet, porttitor dui sed, fermentum quam. Sed nunc augue, ultrices quis vehicula nec, vehicula sit amet enim. Integer mollis lectus non molestie vestibulum. Proin aliquam id eros ac blandit. Curabitur non augue quis metus feugiat aliquam. Nulla tempor sem eget dignissim fermentum. Sed suscipit posuere massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean lobortis dolor id sapien iaculis, in ultrices enim placerat. Morbi lobortis congue est, ut vestibulum dui suscipit eu. Aliquam vel erat erat. Aenean consequat quam ut dictum porttitor. In sagittis auctor lacus, a varius tellus accumsan in. Donec eros metus, sodales consectetur fermentum vitae, sollicitudin vitae nulla. Aliquam erat volutpat.</p>
        </div>
      </div>
    </div>
  );
}
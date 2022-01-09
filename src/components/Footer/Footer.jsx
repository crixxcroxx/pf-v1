import "./footer.css";

export default function Footer() {

  return (
    <footer>
      <div className="contact" id="contact">
        <p className="sub-heading">Interested? Contact Me</p>

        <div>
          <div>
            <i className="fas fa-phone"></i> <span>0930-267-8465</span>
          </div>

          <div>
            <i className="fas fa-envelope-open"></i> <span>cristajesawa@gmail.com</span>
          </div>
        </div>
      </div>

      <a
        className="icon-link"
        href="https://github.com/crixxcroxx/pf-v1"
        title="Source"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
    </footer>
  );
}
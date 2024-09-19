export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ashqiue</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color" >Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Passionate about crafting dynamic web applications with the MERN
            stack. Continuously exploring new technologies to deliver impactful
            digital experiences.
            <br />
            {/* Lorem Soluta facere incidunt dolorem? */}
          </p>
        </div>
        <a href="/Cv/Ashique%20New%20resume%201.pdf" download="Ashique_New_Resume.pdf" className="btn btn-primary">
          Download My CV
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero-ash.png" alt="Hero Section" />
      </div>
    </section>
  );
}

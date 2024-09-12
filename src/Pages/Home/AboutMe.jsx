export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/aboutmepic.jpg" style={{
            display: 'block',
            margin: '0 auto',
            maxWidth: '100%',
            height: 'auto',
          }} alt="About Me" />
      </div>
      <div
        className="hero--section--content--box 
      about--section--box"
      >
        <div className="hero--section--content">
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section-description">
            I am Md Ashique Ali, a skilled{" "}
            <span className="highlight">Full Stack Developer</span> with
            expertise in the <span className="highlight">MERN </span> stack. My
            strengths lie in{" "}
            <span className="highlight"> front-end development</span>, where I
            bring designs to life with clean, responsive code. I also have a
            strong command of <span className="highlight"> Python</span> and am
            currently expanding my knowledge in{" "}
            <span className="highlight">
              Data Structures and Algorithms (DSA)
            </span>{" "}
            using <span className="highlight"> Python</span> to enhance my
            problem-solving skills. With a solid foundation in web development
            and a passion for continuous learning, I am dedicated to delivering
            efficient and scalable solutions.
          </p>
          <p className="hero--section-description">
            I thrive on tackling complex challenges and am always eager to learn
            new technologies. My goal is to build seamless user experiences
            while writing optimized and maintainable code.
          </p>
        </div>
      </div>
    </section>
  );
}

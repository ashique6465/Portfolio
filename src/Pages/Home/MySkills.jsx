import Marquee from "react-fast-marquee";
import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        {/* <p className="section--title">My Skills</p> */}
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div
              className="skills--section--card--content"
              style={{ marginTop: "20px" }}
            >
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="MyTech">
        <h1>My TechStack</h1>
        <div className="tech-image">
          <Marquee>
            <img className="" src="/img/icons/appwrite.png" alt="appwrite" />
            <img src="/img/icons/express.png" alt="express" />
            <img src="/img/icons/mongodb.png" alt="mongodb" />
            <img src="/img/icons/nextjs.png" alt="nextjs" />
            <img src="/img/icons/postgresql.png" alt="postgresql" />
            <img src="/img/icons/tailwind.png" alt="tailwind" />
            <img src="/img/icons/ts.png" alt="typescript" />
            <img src="/img/icons/python.png" alt="python" />
            <img src="/img/icons/sql.png" alt="sql" />
            <img src="/img/icons/postman.png" alt="postman" />
            <img src="/img/icons/html.png" alt="html" />
            <img src="/img/icons/react.png" alt="react" />
            <img src="/img/icons/css.png" alt="css" />
            <img src="/img/icons/js.png" alt="js" />
            <img src="/img/icons/git.png" alt="git" />
            <img src="/img/icons/node.png" alt="nodejs" />
            <img src="/img/icons/email.png" alt="EmailJs" />
          </Marquee>
        </div>
      </div>
    </section>
  );
}

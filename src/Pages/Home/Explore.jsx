import data from "../../data/index.json";
import { useNavigate } from 'react-router-dom';

export default function Explore() {
  const navigate = useNavigate();
  const handleExploreBack = () => {
    navigate("/"); // Assuming you want to navigate back to MyPortfolio
  };

  return (
    <>
      <section className="portfolio--section" id="ExplorePage">
        <div className="portfolio--container-box">
          <div className="portfolio--container">
            <h2 className="section--heading">Explore More Projects</h2>
          </div>
        </div>
        <div className="portfolio--section--container">
          {data?.portfolio?.map((item, index) => (
            <div
              key={index}
              className="portfolio--section--card"
              style={{ borderRadius: "24px" }}
            >
              <div className="portfolio--section--img">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="portfolio--section--card--content">
                <div>
                  <h3 className="portfolio--section--title">{item.title}</h3>
                  <p className="text-md">{item.description}</p>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm portfolio--link"
                >
                  {item.link}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="explore-button-container">
          <button id="explore-back" onClick={handleExploreBack}>
            Back to MyPortfolio
          </button>
        </div>
      </section>
      <style jsx>{`
        .explore-button-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 5px;
        }

        #explore-back {
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          background-color: #007bff;
          color: white;
          cursor: pointer;
        }

        #explore-back:hover {
          background-color: #0056b3;
        }
      `}</style>
    </>
  );
}

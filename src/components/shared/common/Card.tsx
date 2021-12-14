import React from "react";
import youtube from "../../Assets/images/youtube.png";
import article from "../../Assets/images/article.png";
import wikipedia from "../../Assets/images/wikipedia.png";
import defaultImage from "../../Assets/images/default.png";

const Card = ({ data }: any) => {
  return (
    <>
      {data.map((el: any, index: number) => (
        <div key={index} className="card-div">
          <div className="card-name-header">
            {el.mission_name} - {el.flight_number}
          </div>
          <div className="card-padding">
            <div className="card-image">
              {el?.links?.mission_patch === null ? (
                <img src={defaultImage} className="card-img-top" alt="..." />
              ) : (
                <img
                  src={el?.links?.mission_patch}
                  className="card-img-top"
                  alt="..."
                />
              )}
            </div>
            <div className="card-body">
              <h1 className="card-title">{el.rocket?.rocket_name}</h1>
              <h5 className="card-title">{el.launch_year}</h5>
              <h5
                className={`card-title ${
                  el.launch_success === true ? "text-success" : "text-danger"
                }`}
              >
                {el.launch_success === true ? "Success" : "Failure"}
              </h5>
              <p>{el.details}</p>
            </div>

            <div className="card-social-icons">
              <ul>
                <li>
                  <a
                    href={el.links.article_link}
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={article} alt="" />
                  </a>
                </li>

                <li>
                  <a
                    href={el.links.video_link}
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={youtube} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href={el.links.wikipedia}
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={wikipedia} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

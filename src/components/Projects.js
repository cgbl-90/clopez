import projectList from "../projectList";
import color from "../images/color.png";
import contract from "../images/contract.png";
import dictionary from "../images/dictionary.png";
import explorer from "../images/explorer.png";
import furniture from "../images/furniture.png";
import latam from "../images/latam.png";
import lorem from "../images/lorem.png";
import password from "../images/password.png";
import quiz from "../images/quiz.png";
import test from "../images/test.png";
import travel from "../images/travel.png";
import weather from "../images/weather.png";

function Projects(props) {
  const list = !props.props ? projectList.slice(0, 6) : projectList;

  if (!props.props) {
    return (
      <>
        <div className="flex image-card">
          <a href={list[0].link} target="_blank" rel="noopener noreferrer">
            <img
              className="project-image-big"
              src={weather}
              alt={list[0].name}
            />
          </a>
          <span>
            <h3>{list[0].name}</h3>
            <h5>Stack: {list[0].skills}</h5>
          </span>
        </div>
        <div className="grid image-card">
          <span></span>
          <span>
            <a href={list[1].link} target="_blank" rel="noopener noreferrer">
              <img
                className="project-image-small"
                src={dictionary}
                alt={list[1].name}
              />
            </a>
            <h3>{list[1].name}</h3>
            <h5>Stack: {list[1].skills}</h5>
          </span>
          <span>
            <a href={list[2].link} target="_blank" rel="noopener noreferrer">
              <img
                className="project-image-small"
                src={explorer}
                alt={list[2].name}
              />
            </a>
            <h3>{list[2].name}</h3>
            <h5>Stack: {list[2].skills}</h5>
          </span>
        </div>
        <div className="flex image-card">
          <a href={list[4].link} target="_blank" rel="noopener noreferrer">
            <img className="project-image-big" src={latam} alt={list[4].name} />
          </a>
          <span>
            <h3>{list[4].name}</h3>
            <h5>Stack: {list[4].skills}</h5>
          </span>
        </div>
        <div className="grid image-card">
          <span></span>
          <span>
            <a href={list[3].link} target="_blank" rel="noopener noreferrer">
              <img
                className="project-image-small"
                src={furniture}
                alt={list[3].name}
              />
            </a>
            <h3>{list[3].name}</h3>
            <h5>Stack: {list[3].skills}</h5>
          </span>
          <span>
            <a href={list[5].link} target="_blank" rel="noopener noreferrer">
              <img
                className="project-image-small"
                src={travel}
                alt={list[5].name}
              />
            </a>
            <h3>{list[5].name}</h3>
            <h5>Stack: {list[5].skills}</h5>
          </span>
        </div>
      </>
    );
  } else
    return (
      <>
        <div className="flex image-card">
          <a href={list[0].link} target="_blank" rel="noopener noreferrer">
            <img
              className="project-image-big"
              src={weather}
              alt={list[0].name}
            />
          </a>
          <span>
            <h3>{list[0].name}</h3>
            <h5>Stack: {list[0].skills}</h5>
          </span>
        </div>
        <div className="grid image-card">
          <span></span>
          <span>
            <a href={list[1].link} target="_blank" rel="noopener noreferrer">
              <img
                className="project-image-small"
                src={dictionary}
                alt={list[1].name}
              />
            </a>
            <h3>{list[1].name}</h3>
            <h5>Stack: {list[1].skills}</h5>
          </span>
          <span>
            <a href={list[2].link} target="_blank" rel="noopener noreferrer">
              <img
                className="project-image-small"
                src={explorer}
                alt={list[2].name}
              />
            </a>
            <h3>{list[2].name}</h3>
            <h5>Stack: {list[2].skills}</h5>
          </span>
        </div>
        <div className="flex image-card">
          <a href={list[4].link} target="_blank" rel="noopener noreferrer">
            <img className="project-image-big" src={latam} alt={list[4].name} />
          </a>
          <span>
            <h3>{list[4].name}</h3>
            <h5>Stack: {list[4].skills}</h5>
          </span>
        </div>
        <div className="grid image-card">
          <span></span>
          <span>
            <a href={list[3].link} target="_blank" rel="noopener noreferrer">
              <img
                className="project-image-small"
                src={furniture}
                alt={list[3].name}
              />
            </a>
            <h3>{list[3].name}</h3>
            <h5>Stack: {list[3].skills}</h5>
          </span>
          <span>
            <a href={list[5].link} target="_blank" rel="noopener noreferrer">
              <img
                className="project-image-small"
                src={travel}
                alt={list[5].name}
              />
            </a>
            <h3>{list[5].name}</h3>
            <h5>Stack: {list[5].skills}</h5>
          </span>
        </div>
        <div className="flex image-card">
          <a href={list[6].link} target="_blank" rel="noopener noreferrer">
            <img
              className="project-image-big"
              src={contract}
              alt={list[6].name}
            />
          </a>
          <span>
            <h3>{list[6].name}</h3>
            <h5>Stack: {list[6].skills}</h5>
          </span>
        </div>
        <div className="grid image-card">
          <span></span>
          <span>
            <a href={list[10].link} target="_blank" rel="noopener noreferrer">
              <img
                className="project-image-small"
                src={test}
                alt={list[10].name}
              />
            </a>
            <h3>{list[10].name}</h3>
            <h5>Stack: {list[10].skills}</h5>
          </span>
          <span>
            <a href={list[8].link} target="_blank" rel="noopener noreferrer">
              <img
                className="project-image-small project-image-small-sec"
                src={color}
                alt={list[8].name}
              />
            </a>
            <h3>{list[8].name}</h3>
            <h5>Stack: {list[8].skills}</h5>
          </span>
        </div>
        <div className="flex image-card">
          <a href={list[9].link} target="_blank" rel="noopener noreferrer">
            <img
              className="project-image-big"
              src={password}
              alt={list[9].name}
            />
          </a>
          <span>
            <h3>{list[9].name}</h3>
            <h5>Stack: {list[9].skills}</h5>
          </span>
        </div>
        <div className="grid image-card">
          <span></span>
          <span>
            <a href={list[11].link} target="_blank" rel="noopener noreferrer">
              <img
                className="project-image-small"
                src={quiz}
                alt={list[11].name}
              />
            </a>
            <h3>{list[11].name}</h3>
            <h5>Stack: {list[11].skills}</h5>
          </span>
          <span>
            <a href={list[7].link} target="_blank" rel="noopener noreferrer">
              <img
                className="project-image-small project-image-small-sec"
                src={lorem}
                alt={list[7].name}
              />
            </a>
            <h3>{list[7].name}</h3>
            <h5>Stack: {list[7].skills}</h5>
          </span>
        </div>
      </>
    );
}

export default Projects;

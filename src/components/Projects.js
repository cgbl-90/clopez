import projects from "../projects";

function Projects(props) {
  const list = !props.props ? projects.slice(0, 6) : projects;

  if (!props.props) {
    return (
      <>
        <div className="flex image-card">
          <a href={list[0].link} target="_blank" rel="noopener noreferrer">
            <img
              className="project-image-big"
              src={list[0].picture}
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
                src={list[1].picture}
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
                src={list[2].picture}
                alt={list[2].name}
              />
            </a>
            <h3>{list[2].name}</h3>
            <h5>Stack: {list[2].skills}</h5>
          </span>
        </div>
        <div className="flex image-card">
          <a href={list[4].link} target="_blank" rel="noopener noreferrer">
            <img
              className="project-image-big"
              src={list[4].picture}
              alt={list[4].name}
            />
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
                src={list[3].picture}
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
                src={list[5].picture}
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
              src={list[0].picture}
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
                src={list[1].picture}
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
                src={list[2].picture}
                alt={list[2].name}
              />
            </a>
            <h3>{list[2].name}</h3>
            <h5>Stack: {list[2].skills}</h5>
          </span>
        </div>
        <div className="flex image-card">
          <a href={list[4].link} target="_blank" rel="noopener noreferrer">
            <img
              className="project-image-big"
              src={list[4].picture}
              alt={list[4].name}
            />
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
                src={list[3].picture}
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
                src={list[5].picture}
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
              src={list[6].picture}
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
                src={list[10].picture}
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
                src={list[8].picture}
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
              src={list[9].picture}
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
                src={list[11].picture}
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
                src={list[7].picture}
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

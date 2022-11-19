import "./index.css";

export const CardProjects = ({ name, image, description, live, repo }) => {
  return (
    <div className="card-projects">
      <div className="container-card">
        <img src={image} alt="projectImage" />
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className="links-projects">
        <a target="_blank" rel="noreferrer" href={live}>
          Live view
        </a>
        <a target="_blank" rel="noreferrer" href={repo}>
          Repository
        </a>
      </div>
    </div>
  );
};

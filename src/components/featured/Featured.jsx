import "./featured.scss";
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left__side">
          <h2>
            Your Path to <span>Freelance Excellence</span> <br /> for Business
            Growth
          </h2>
          <div className="search">
            <div className="searchInput">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Discovering it is akin to finding a new romance..."
              />
            </div>
            <button className="searchButton">Search</button>
          </div>
          <div className="popular__tags">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Social Media</button>
            <button>Photography</button>
            <button>ReactJS</button>
          </div>
        </div>
        <div className="right__side">
          <img src="/src/assets/img/thumbnail.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;

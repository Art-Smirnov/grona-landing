import './Team.sass';

const Team = () => {
  return (
    <div id="team" className="container team">
      <div className="team-titles">
        <span className="team-subtitle">Here we are</span>
        <h2 className="team-title">Meet the Team</h2>
      </div>

      <div className="team-container">
        <div className="card card0">
          <h2>Anisimov Ivan</h2>
          <span>CEO</span>
        </div>

        <div className="card card1">
          <h2>Evgeniy Kaieta</h2>
          <span>Full Stack Developer</span>
        </div>

        <div className="card card2">
          <h2>Smirnov Artem</h2>
          <span>Front-End Developer</span>
        </div>
      </div>
    </div>
  );
};

export default Team;

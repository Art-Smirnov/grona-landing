import './Team.sass';

const Team = () => {
  return (
    <div id="team" className="container team">
      <div className="team-titles">
        <span className="team-exclamation">!</span>
        <h2 className="team-title">Our Team</h2>
      </div>

      <div className="team-container">
        <div className="card card0">
          <div className="border">
            <h2>Anisimov Ivan</h2>
          </div>
        </div>

        <div className="card card1">
          <div className="border">
            <h2>Evgeniy Kaieta</h2>
          </div>
        </div>

        <div className="card card2">
          <div className="border">
            <h2>Smirnov Artem</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

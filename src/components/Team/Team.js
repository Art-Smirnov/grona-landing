import zhenyaPhoto from '../images/zhanya.jpg';
import artemPhoto from '../images/artem.jpg';
import ivanPhoto from '../images/Ivan.jpg';

import './Team.sass';

import TeamMemberCard from './TeamMemberCard';

const Team = () => {
  return (
    <div className="container team">
      <div className="team-titles">
        <span className="team-exclamation">!</span>
        <h2 className="team-title">Our Team</h2>
      </div>

      <div className="team-container">
        <TeamMemberCard
          position="UX Designer"
          name="Anisimov Ivan"
          photo={ivanPhoto}
        />

        <TeamMemberCard
          position="Backend Developer"
          name="Evgeniy Kaieta"
          photo={zhenyaPhoto}
        />

        <TeamMemberCard
          position="Front End Developer"
          name="Smirnov Artem"
          photo={artemPhoto}
        />
      </div>
    </div>
  );
};

export default Team;

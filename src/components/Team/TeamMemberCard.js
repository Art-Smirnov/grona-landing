import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TeamMemberCard = ({ name, position, photo }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="team-member-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="team-member-card-photo-container">
        <img
          src={photo}
          alt={name}
          className="team-member-card-photo"
          style={{
            transform: `scale(${isHovered ? 2 : 1}) translate(-${
              isHovered ? cursorPosition.x / 10 : 0
            }px, -${isHovered ? cursorPosition.y / 10 : 0}px)`,
          }}
        />
        <div className="team-member-card-name">{name}</div>
        <div className="team-member-card-position">{position}</div>
      </div>
    </div>
  );
};

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default TeamMemberCard;

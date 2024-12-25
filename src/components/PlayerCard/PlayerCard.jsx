import styled from "styled-components";
import PropTypes from "prop-types";

const PlayerCard = (props) => {
  const PlayerCardContainer = styled.div`
    display flex;
    background-color: #fff;
    border-radius: 12px;
    padding: 32px;
    width: fit-content;
    border: 3px solid #AE4746;

    & div {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      
    }
  `;

  return (
    <>
      <PlayerCardContainer>
        <div>
          <img />
          <p>Anakcry</p>
          <span>‎ </span>
          <p>Ingame-lider</p>
        </div>
      </PlayerCardContainer>
    </>
  );
};

PlayerCard.propTypes = {
  teamMembers: PropTypes.string.isRequired,
}


export { PlayerCard };

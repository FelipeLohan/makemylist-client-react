import styled from "styled-components";
import PropTypes from "prop-types";

const PlayerCard = (props) => {
  const PlayerCardContainer = styled.div`
    display flex;
    background-color: #fff;
    border-radius: 12px;
    padding: 32px;
    width: fit-content;
    border: 4px solid ${props.primaryColor};

    & div {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }

    & img{
      width: 70%;
    }

    & h3, h4{
        color: ${props.primaryColor};
    }

    & h3{
    font-size: 4vmin
    }

    & h4{
    font-size: 2.5vmin;
    }
  `;

  return (
    <>
      <PlayerCardContainer>
        <div>
          <img src={props.image} />
          <h3>{props.nick}</h3>
          <h4>{props.function}</h4>
        </div>
      </PlayerCardContainer>
    </>
  );
};

PlayerCard.propTypes = {
  teamMembers: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  nick: PropTypes.string.isRequired,
  function: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
};

export { PlayerCard };

import styled from "styled-components";
import PropTypes from "prop-types";
import { PlayerCard } from "../PlayerCard";

const LineContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Line = (props) => {
  const TitleLineContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background-color: ${props.primaryColor};

    & h3 {
      color: #fff;
    }
  `;

  const CardContainer = styled.div`
    padding: 16px;
    background: ${props.secondaryColor};
    width: 100%;
  `

  return (
    <>
      <LineContainer>
        <TitleLineContainer>
          <h3>{props.name}</h3>
        </TitleLineContainer>
        <CardContainer>
          <PlayerCard />
        </CardContainer>

      </LineContainer>
    </>
  );
};

Line.propTypes = {
  primaryColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export { Line };

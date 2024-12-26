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
      font-size: 6vmin;
      font-weight: 800;
    }
  `;

  const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 16px;
    background: ${props.secondaryColor};
    width: 100%;
  `;

  return (
    (props.teamMembers.length > 0) && <LineContainer>
        <TitleLineContainer>
          <h3>{props.name}</h3>
        </TitleLineContainer>
        <CardContainer>
          {props.teamMembers.map((e) => {
            return (
             <PlayerCard
                key={e.nickValue}
                nick={e.nickValue}
                image={e.imagemValue}
                function={e.funcaoValue}
                line={e.lineValue}
                primaryColor={props.primaryColor}
                secondaryColor={props.secondaryColor}
              />
            );
          })}
        </CardContainer>
      </LineContainer>
  );
};

Line.propTypes = {
  primaryColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  teamMembers: PropTypes.string.isRequired,
};

export { Line };

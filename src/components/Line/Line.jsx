import styled from "styled-components";
import PropTypes from "prop-types";

const LineContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const Line = (props) => {
  const TitleLineContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 16px;
    background-color: ${props.primaryColor};

    & h3 {
      color: #fff;
    }
  `;

  return (
    <>
      <LineContainer>
        <TitleLineContainer>
          <h3>{props.name}</h3>
        </TitleLineContainer>

      </LineContainer>
    </>
  );
};

Line.propTypes = {
  primaryColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export { Line };

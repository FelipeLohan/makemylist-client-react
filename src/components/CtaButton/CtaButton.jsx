import PropTypes from "prop-types";
import styled from "styled-components";

const CtaButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  button{
    background-color: #213557;
    color: #F4F8FF;
    padding: 10px 20px;
    border: none;
    border-radius: 12px;
    font-size: 2.5vmin
  }
`;

const CtaButton = (props) => {
  return (
    <>
      <CtaButtonContainer>
        <button>{props.children}</button>
      </CtaButtonContainer>
    </>
  );
};

CtaButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export { CtaButton };

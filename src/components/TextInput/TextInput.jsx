import styled from "styled-components";
import PropTypes from 'prop-types';

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  color: #213557;

  label {
    font-size: 2.5vmin;
    margin-bottom: 5px;
  }

  input {
    font-size: 2vmin;
    padding: 10px;
    border: 0.3px solid #c2c2c2;
    border-radius: 6px;
  }
`

const TextInput = (props) => {

  const handleOnChange = (event) => {
    props.handleState(event.target.value)
  }

  return (
    <>
    <TextInputContainer>
      <label>{props.labelText}</label>
      <input value={props.value} onChange={handleOnChange} required={props.valueRequired} placeholder={props.placeholderText} />
    </TextInputContainer>
    </>
  )
}

TextInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  valueRequired: PropTypes.string.isRequired,
  handleState:  PropTypes.string.isRequired,
  value:  PropTypes.string.isRequired,
};

export { TextInput }
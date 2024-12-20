import styled from "styled-components";
import PropTypes from "prop-types";

const DropdownListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

  label {
    font-size: 3vmin;
    margin-bottom: 5px;
    font-weight: 400;
  }

  select {
    font-size: 2vmin;
    padding: 10px;
    border: 0.3px solid #c2c2c2;
    border-radius: 6px;
  }
`;

const DropdownList = (props) => {
  return (
    <>
      <DropdownListContainer>
        <label>{props.labelText}</label>
        <select required={props.valueRequired}>
          <option></option>
          {props.item.map(e => {
            return <option key={e}>{e}</option>
          })}
        </select>
      </DropdownListContainer>
    </>
  );
};

DropdownList.propTypes = {
  item: PropTypes.string.isRequired,
  valueRequired: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};

export { DropdownList };

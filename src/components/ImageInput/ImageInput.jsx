import styled from "styled-components";
import PropTypes from "prop-types";

const ImageInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #213557;
  margin-bottom: 10px;

  label {
    font-size: 3vmin;
    margin-bottom: 5px;
  }

  input {
    font-size: 2.5vmin;
    padding: 10px;
    border: 0.3px solid #c2c2c2;
    border-radius: 6px;
  }

  input[type="file"]::-webkit-file-upload-button {
    background-color: #fff;
    color: #213557;
    border: 0.1px solid #213557;
    padding: 8px 12px;
    border-radius: 10px; 
    font-size: 2.2vmin;
    margin-right: 10px;
  }
`;

const ImageInput = (props) => {
  return (
    <>
      <ImageInputContainer>
        <label>Imagem</label>
        <input
          type="file"
          accept="image/*"
          onChange={props.handleImage}
          required
        />
      </ImageInputContainer>
    </>
  );
};

ImageInput.propTypes = {
  handleImage: PropTypes.string.isRequired,
};

export { ImageInput };

import styled from "styled-components";
import { TextInput } from "../TextInput";
import { DropdownList } from "../DropdownList";
import { CtaButton } from "../CtaButton";
import { useState } from "react";
import PropTypes from "prop-types";
import { ImageInput } from "../ImageInput";

const FormContainer = styled.section`
  background-color: #fff;
  width: 50%;
  margin: 0 auto;
  padding: 40px;
  border-radius: 8px;
  margin-top: 40px;

  h2 {
    font-size: 4vmin;
    margin-bottom: 40px;
    color: #213557;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 10px;

    h2 {
      font-size: 5vmin;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ImagePreviewContainer = styled.img`
  width: 50%;
  border: 1px solid #213557;
  margin-bottom: 20px;
`

const Form = (props) => {
  const itens = ["LINE UP", "LINE A", "LINE B"];

  const [nickValue, setNickValue] = useState("");
  const [imagemValue, setImagemValue] = useState(""); // URL base64 da imagem
  const [funcaoValue, setFuncaoValue] = useState("");
  const [lineValue, setLineValue] = useState("");
  const [previewImage, setPreviewImage] = useState(null); // Para pré-visualização da imagem

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Usa FileReader para carregar a imagem e criar a URL base64
      const reader = new FileReader();
      reader.onload = () => {
        const base64URL = reader.result; // Obtém a URL base64
        setPreviewImage(base64URL); // Define a URL base64 para pré-visualização
        setImagemValue(base64URL); // Armazena a URL base64 no estado
      };
      reader.readAsDataURL(file); // Converte o arquivo para base64
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    // Envia os dados com a URL base64 da imagem
    props.memberValue({
      nickValue,
      imagemValue, // URL base64 da imagem
      funcaoValue,
      lineValue,
    });

    // Limpa os estados após o envio
    setNickValue("");
    setImagemValue("");
    setFuncaoValue("");
    setLineValue("");
    setPreviewImage(null); // Limpa o preview
  };

  return (
    <>
      <FormContainer>
        <h2>PREENCHA OS DADOS:</h2>
        <form onSubmit={handleOnSubmit}>
          <TextInput
            handleState={(e) => setNickValue(e)}
            value={nickValue}
            valueRequired={true}
            labelText="NICKNAME"
            placeholderText="Digite o nickname"
          />
          <ImageInput handleImage={handleImageChange} />
          {previewImage && <ImagePreviewContainer src={previewImage} alt="Preview" />}
          <TextInput
            handleState={(e) => setFuncaoValue(e)}
            value={funcaoValue}
            valueRequired={true}
            labelText="FUNÇÃO"
            placeholderText="Digite a função do player no time"
          />
          <DropdownList
            labelText="LINE"
            valueRequired={true}
            item={itens}
            handleState={(e) => setLineValue(e)}
            value={lineValue}
          />
          <CtaButton>Criar Card</CtaButton>
        </form>
      </FormContainer>
    </>
  );
};

Form.propTypes = {
  memberValue: PropTypes.func.isRequired,
};

export { Form };

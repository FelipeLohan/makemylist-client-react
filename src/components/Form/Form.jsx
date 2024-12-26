import styled from "styled-components";
import { TextInput } from "../TextInput";
import { DropdownList } from "../DropdownList";
import { CtaButton } from "../CtaButton";
import { useState } from "react";
import PropTypes from "prop-types";

const FormContainer = styled.section`
  background-color: #fff;
  width: 50%;
  margin: 0 auto;
  padding: 40px;
  border-radius: 8px;
  margin-top: 40px;
  margin-bottom: 40px;

  h2 {
    font-size: 4vmin;
    margin-bottom: 40px;
    color: #213557;
  }
`;

const Form = (props) => {
  const itens = ["LINE UP", "LINE A", "LINE B"];

  const [nickValue, setNickValue] = useState("");
  const [imagemValue, setImagemValue] = useState("");
  const [funcaoValue, setFuncaoValue] = useState("");
  const [lineValue, setLineValue] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.memberValue({
      nickValue,
      imagemValue,
      funcaoValue,
      lineValue,
    });
    setNickValue("");
    setImagemValue("");
    setFuncaoValue("");
    setLineValue("");
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
          <TextInput
            handleState={(e) => setImagemValue(e)}
            value={imagemValue}
            labelText="IMAGEM"
            placeholderText="Digite o caminho da imagem"
          />
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

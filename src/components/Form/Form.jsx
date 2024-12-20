import styled from "styled-components"
import { TextInput } from "../TextInput";
import { DropdownList } from "../DropdownList";
import { CtaButton } from "../CtaButton";

const FormContainer = styled.section`
  background-color: #FFF;
  width: 80%;
  margin: 0 auto;
  padding: 40px;
  border-radius: 8px;
  margin-top: 40px;

  h2{
    font-size: 4vmin;
    margin-bottom: 40px;
    color: #213557;
  }
`

const Form = () => {

  const itens = [
    "LINE UP",
    "LINE A",
    "LINE B"
  ]

  const handleOnSubmit = (event) => {
    event.preventDefault()
    console.log("Olá")
  }

  return (
    <>
      <FormContainer>
        <h2>PREENCHA OS DADOS:</h2>
        <form onSubmit={handleOnSubmit}>
          <TextInput valueRequired={true} labelText="NICKNAME" placeholderText="Digite o nickname"/>
          <TextInput labelText="IMAGEM" placeholderText="Digite o caminho da imagem"/>
          <TextInput valueRequired={true} labelText="FUNÇÃO" placeholderText="Digite a função do player no time" />
          <DropdownList labelText="LINE" valueRequired={true} item={itens}/>
          <CtaButton>
            Criar Card
          </CtaButton>
        </form>
      </FormContainer>
    </>
  )
}

export { Form }
import styled from "styled-components";
import PropTypes from "prop-types";
import { PlayerCard } from "../PlayerCard";
import html2canvas from "html2canvas";

const handleSaveScreenshot = async () => {
  const linesContainers = document.querySelectorAll(".lines-container");

  if (linesContainers.length === 0) {
    console.error("Containers das lines não encontrados!");
    return;
  }

  try {
    // Cria um contêiner temporário
    const tempContainer = document.createElement("div");
    tempContainer.style.position = "absolute";
    tempContainer.style.top = "-9999px"; // Torna o contêiner invisível

    // Adiciona as linhas ao contêiner temporário
    linesContainers.forEach((line) => {
      tempContainer.appendChild(line.cloneNode(true)); // Clona os elementos para não alterar o DOM original
    });

    // Adiciona o contêiner temporário ao corpo do documento
    document.body.appendChild(tempContainer);

    // Captura o contêiner temporário
    const canvas = await html2canvas(tempContainer);

    // Converte o canvas para uma imagem no formato PNG
    const image = canvas.toDataURL("image/png");

    // Cria um elemento <a> para baixar a imagem
    const link = document.createElement("a");
    link.href = image;
    link.download = "lines-screenshot.png"; // Nome do arquivo
    link.click();

    // Remove o contêiner temporário do DOM após a captura
    document.body.removeChild(tempContainer);
  } catch (error) {
    console.error("Erro ao capturar o print:", error);
  }
};

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
    props.teamMembers.length > 0 && (
      <div className="lines-container">
        <LineContainer>
          <TitleLineContainer>
            <h3>{props.name}</h3>
          </TitleLineContainer>
          <CardContainer>
            {props.teamMembers.map((e) => (
              <PlayerCard
                key={e.nickValue}
                nick={e.nickValue}
                image={e.imagemValue}
                function={e.funcaoValue}
                line={e.lineValue}
                primaryColor={props.primaryColor}
                secondaryColor={props.secondaryColor}
              />
            ))}
          </CardContainer>
        </LineContainer>
      </div>
    )
  );
};

const LineWithButton = () => {
  const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 16px;

    & button {
      background-color: #213557;
      color: #f4f8ff;
      padding: 10px 20px;
      border: none;
      border-radius: 12px;
      font-size: 3vmin;
      cursor: pointer;
    }
  `;

  return (
    <>
      <ButtonContainer>
        <button onClick={handleSaveScreenshot}>Salvar e tirar print</button>
      </ButtonContainer>
    </>
  );
};

Line.propTypes = {
  primaryColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  teamMembers: PropTypes.string.isRequired,
};

export { Line, LineWithButton };

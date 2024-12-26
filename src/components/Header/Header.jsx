import styled from "styled-components";
import Logo from "../../assets/images/Logo.svg";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: #213557;
  padding: 10px 0px;
  width: 100%;
  max-width: 100%;
  margin-bottom: 40px;

  img {
    width: 20%;
  }

  @media (max-width: 768px) {
    img {
      width: 35%;
    }
  }
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <img src={Logo} />
      </HeaderContainer>
    </>
  );
};

export { Header };

import styled from "styled-components";
import Logo from "../../assets/images/Logo.svg";
import GithubIcon from "../../assets/images/Github-icon.svg";
import LinkedinIcon from "../../assets/images/Linkedin-icon.svg";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #213557;
`;

const LogoFooterContainer = styled.div`
  & img {
    width: 50%;
  }
`

const RedesSociaisFooterContainer = styled.div`
  display: flex;
  gap: 30px;

  & a {
    width: 30%;
  }
`

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <LogoFooterContainer>
          <img src={Logo} alt="Logo makemylist" />
        </LogoFooterContainer>
        <RedesSociaisFooterContainer>
          <a href="https://github.com/FelipeLohan/makemylist-client-react"><img src={GithubIcon} alt="Github" /></a>
          <a href="https://www.linkedin.com/in/felipe-lohan-767294213/"><img src={LinkedinIcon} alt="Linkedin" /></a>
        </RedesSociaisFooterContainer>
      </FooterContainer>
    </>
  );
};

export { Footer };

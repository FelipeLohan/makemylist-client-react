import styled from "styled-components";

const HeroBannerContainer = styled.section`
  display: flex;
  width: 80%;
  margin: 0 auto;
  background-color: #64759C;
  padding: 80px 40px;
  border-radius: 12px;

  h2{
    color: #fff;
    font-size: 5vmin;
  }
`

const HeroBanner = () => {
  return(
    <>
    <HeroBannerContainer>
      <h2>Monte a line do seu time, e compartilhe com todos.</h2>
    </HeroBannerContainer>
    </>
  )
}

export { HeroBanner }
import styled from 'styled-components'


export const MainContainer = styled.main`
  color:#808080;
  background-color: #2CB3E8;
  height:100% ;
  strong {
    color:#828282;
    margin-right:0.5rem;
  }
  @media (min-width:1080px) {
    padding: 2rem 4rem;
  }
`
export const Title = styled.div`
  color:#FFF;
  font-size: 2rem;
  margin:0 1.5rem;
  text-transform:uppercase;
  font-weight: normal;
  display:flex;
  align-items:center;
  justify-content:space-between;
  @media (min-width:1080px) {
    font-size: 3rem;
  }
  div {
    text-transform:uppercase;
    font-weight: normal;
    display:flex;
    align-items:center;
  }
`
export const SwitchTheme = styled.label`
  margin: 0 0.5rem;
  position: relative;
  display: inline-block;
  width: 65px;
  height: 25px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;

  }
  span:before {
  
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 4px;
  background-color: #5D5B56;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
  }
  input:checked + span {
    background-color: #fff;
  }

  input:focus + span {
    box-shadow: 0 0 1px #fff;
  }

  input:checked + span:before {
    -webkit-transform: translateX(39px);
    -ms-transform: translateX(39px);
    transform: translateX(39px);
  }
`
export const PokemonContainer = styled.div`
  display:grid;  
  grid-template-rows: 15vh 1fr;
  div > div {
    border-radius:10px;
  }
`
export const Presentation = styled.div`
  display:flex;
  flex-direction:column;

  @media (min-width:1584px) {
    display:grid;
    grid-template-columns: 0.7fr 1fr;
    justify-content: center;
    gap:3rem;
  }

  div > div {
    border-radius:10px;
  }
`
export const BoxContainer = styled.div`
  display:flex;
  padding:0.5rem 1rem;
  margin:2rem 1.5rem;
  background-color: #FFF;
  align-items:center;
  justify-content: center;

  @media (min-width:1080px) {
    padding:0.5rem 1rem;
    margin:2rem 1.5rem;
  }
`
export const ImageContainer = styled.div`
  img{
    width:200px;
    height:200px;
  }

  @media (min-width:600px) {
    img{
      width:90%;
      height:90%;
    }
  }
`

export const BoxType = styled.div`
  display:flex;
  width:100%;
  color: #000;
  justify-content:center;

  align-items:center;
  > div {
    width:110px;
    margin-left:1rem;
  }

  @media (min-width:600px) {
    justify-content:flex-start;

  }
`

export const AtributesContainer = styled.div`
  display:flex;
  flex-direction:column;

  strong{
    margin: 1rem 0 1rem;
  }
`
export const Atributes = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  gap: 0.5rem;
  margin-bottom:0.5rem;

  @media (min-width:600px) {
    gap: 1rem;
    margin-bottom:0.5rem;
  }
`
export const Content = styled.div`
  display:flex;
  justify-content: flex-start;
`
export const DobleContainer = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  justify-content: space-between;

  div{
    padding: 1rem 0;
    margin: 0 1.5rem;
  }
`
export const EvolutionContainer = styled.div`
  width:100%;
  display:flex;

  div {
    margin-left:2rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    img {
      margin-bottom:1rem;
    }
  }

  @media (min-width:600px) {
    width:100%;
    display:flex;
    margin: 1rem;

    div {
      margin-left:4rem;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;

      img {
        margin-bottom:1rem;
      }
    }
  }
`
export const Description = styled.div`
  p {
    font-size:18px;
    line-height:1.5rem;
    margin: 1.8rem 1rem;
  }
`
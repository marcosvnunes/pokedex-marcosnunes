import styled from 'styled-components'


export const Container = styled.div`
  display: grid;
  height:100vh;
  grid-template-rows: 1fr 1fr;
  width:100%;

  @media (min-width:1080px) {
    grid-template-columns: 320px 1fr;
  }

  @media (min-width:1400px) {
    grid-template-columns: 380px 1fr;
  }
`
export const SidebarContainer = styled.aside`
  background-color: #C04C4B;
  padding-top:2rem;
  padding-left:0.5rem;
  display:flex;  
  flex-direction:column;
  padding-bottom: 2rem;
  height:100% ;

  @media (min-width:1080px) {
    padding-bottom: 0 0 200px;
  }
  
`
export const LogoContainer = styled.section`
  display:flex;
  justify-content: center;
  p{
    display:none;
  }
  @media (min-width:1080px) {
    display:block;
    margin:1rem 2rem;
    p{
      display:inline-block;
      padding: 0.5rem 0; 
      font-size:1rem;
      text-align:center;
    }
  }  
`
export const FormContainer = styled.section`
   border-bottom: none;
  display:flex;
  justify-content:center;

  @media (min-width:1080px) {
    margin:1rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #FCFCFD;
  }
`
export const FormSearch = styled.form`
  background: #fff;
  border-radius:20px;
  width:80%; 
  
`
export const InputContainer = styled.span`
  background-color: #FCFCFD;
  margin: 0 1rem;
  
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-between;
  padding:0.2rem 0;

 
  input {
    color: #707070;
    line-height:2rem;
    font-size:0.9rem;
    width:100%;
    border: none;
    ::placeholder {
    color: #C2C2C2
    }
  }
`
export const MenuContainer = styled.ul`
  display:none;

@media (min-width:1080px) {
  display:block;
}

overflow:auto;
height: 67vh;
padding: 0 2rem;
font-size: 1.1rem;
line-height: 2rem;
color: #F3F3F3;

li:nth-child(1) {
  font-weight: bold;
  color: #FFF;
  text-decoration:underline;

}
li{
  list-style-type:none;
  margin-bottom:0.75rem;
}
  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
    border-radius:5px;
  }
  ::-webkit-scrollbar {
    height: 90%;
    width: 8px;
    background: #F4F4F4;
    border-radius:5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #0F0D3C;
    border-radius:5px;
  }
`


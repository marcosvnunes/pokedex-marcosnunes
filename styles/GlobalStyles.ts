import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin:0;
  padding:0;
}
body, html{
  height:100vh;
}
body {
  box-sizing:border-box;
  background: #FCFCFD;
  color:#FCFCFD;
  font-family: 'Montserrat', Times, serif;
  font-size: 17px;
  font-weight:400;
}
input {
  outline: 0;
}

button {
  border:none;
}
`
import GlobalStyle from '../styles/GlobalStyles'
import '../css/main.css'
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}


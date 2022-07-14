import '../styles/globals.css';
import '../styles/fonts.css';
import Layout from '../pages/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

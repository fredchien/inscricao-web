import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/style.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>VNW - Inscreva-se</title>
        <script src="https://kit.fontawesome.com/48a5a2c166.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import "bootstrap/dist/css/bootstrap.min.css";
// import "../pages/style.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Título do site</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
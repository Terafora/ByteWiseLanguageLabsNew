import { DefaultSeo } from 'next-seo';
import '@/styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Bytewise Language Labs"
        description="Learn Japanese in VR with Bytewise Language Labs!"
        openGraph={{
          type: 'website',
          locale: 'en_UK',
          url: 'https://bytewiselanguagelabs.com',
          siteName: 'Bytewise Language Labs',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

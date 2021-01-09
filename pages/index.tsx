import Head from "next/head";
import * as S from "@styles/Home";

function Home() {
  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Main>
        <S.Logo src="/vercel.svg" alt="logo" />
      </S.Main>
    </>
  );
}

export default Home;

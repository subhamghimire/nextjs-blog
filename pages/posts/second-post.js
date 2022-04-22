import Layout from "../../components/layout";
import Head from "next/head";

export default function SecondPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>Second Post</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2>Second Post</h2>
      </Layout>
    </>
  );
}

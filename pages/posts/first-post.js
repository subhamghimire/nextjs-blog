import Layout from "../../components/layout";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2>First Post</h2>
      </Layout>
    </>
  );
}

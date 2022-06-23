import React, { memo } from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

import Layout from "../../components/layout";

const FirstPost = memo(() => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log("script loaded correctly, window.FB has been populated")
        }
      />
      <h1>FirstPost</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
});

export default FirstPost;
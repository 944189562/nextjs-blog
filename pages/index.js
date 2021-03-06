import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Alert from "../components/alert";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {id}
              <br />
              <Date dateString={date} />
              {/* <br /> */}
              {/* {date} */}
            </li>
          ))}
        </ul>
      </section>
      <Alert type="success">error message</Alert>
    </Layout>
  );
}

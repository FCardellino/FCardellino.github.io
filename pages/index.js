import { posts } from "../posts";

import Layout from "../components/Layout";
import Link from "next/link";

const Index = ({ posts }) => {
  return (
    <Layout pageTitle="My Blog">
      <div className="prose max-w-none">
        <h1>Blog Posts</h1>
      </div>
      <PostsList posts={posts} />
    </Layout>
  );
};

const PostsList = ({ posts }) => {
  if (!posts || !posts.length) return <p>No posts found</p>;

  return (
    <div className="w-full">
      <ul className="mt-4">
        {posts.map((post) => {
          const { frontmatter, slug } = post;
          const { description, date, title } = frontmatter;

          return (
            <li
              key={slug}
              className="px-8 py-2 m-0 mt-4 border-b border-card-border hover:bg-gray-100"
            >
              <Link href={`/blog/${slug}`}>
                <a>
                  <div className="text-xl font-medium">{title}</div>
                  <p className="mt-2 mb-4 font-light">{description}</p>
                  <p className="text-sm font-hairline">{date}</p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const postsData = posts();

  return {
    props: {
      posts: postsData,
    },
  };
}

export default Index;








/* import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
 */
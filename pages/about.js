import Layout from "../components/Layout";

function About() {
  return (
    <Layout pageTitle="About | My Blog">
      <article className="prose max-w-none">
        <h1>About</h1>
        <p>Hello, I'm a software developer student. In the last few month I've been taking  different AI and Data Analysis courses, 
            so I decided to create my personal blog to share my progress and the projects I have completed.</p>
        <p>
            This Blog is a work in progress, so I'll be adding new things in the near feature. However if you wish to contact me, 
            this <a href="https://www.linkedin.com/in/fernando-cardellino/">link</a> will send you to my profile in LinkedIn.
        </p>
      </article>
    </Layout>
  );
}

export default About;
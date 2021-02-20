import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Form from '../components/Form/Form';


export default function Home({result}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Flo, I'm a Web developer.</p>
      </section>
      <section>
        <Form />
      </section>
      <section>
        {result.data}
      </section>
    </Layout>
  )
}


export async function getStaticProps() {
  const data = await fetch('http://localhost:3000/api/posts')
  const result = await data.json();
  return {
    props : {
      result
    }
  }
}
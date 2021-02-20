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
        hello world! Voilà {' '+result.data}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const fetched = await fetch('https://florianbaumes.vercel.app/api/posts')
  const result = await fetched.json();

  return {
    props : {
      result
    }
  }
}